import React from 'react'
import Select from 'react-select'

const SECTION_ENTER_NAME = 0;
const SECTION_PICK_NAME_MATCH = 1;
const SECTION_ENTER_RESPONSE = 2;

const SECTION_RESULT_NAME_NOT_FOUND = 3;
const SECTION_RESULT_COMPLETE = 4;
const SECTION_ERROR = 5;

class RSVPForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      pending: false,
      section: SECTION_ENTER_NAME,
      namescores: [],
      name: null,
      selectValue: null,
    };

    this._onSubmitFullName = this._onSubmitFullName.bind(this);
    this._onSubmitPickName = this._onSubmitPickName.bind(this);
    this._onSubmitResponse = this._onSubmitResponse.bind(this);
  }

  render() {
    let content = this._getContent();
    if (this.state.pending) {
      content = 'Please wait, this should only take a few seconds...'
    }
    return <div className="wedding-rsvp-form">
      <h2>RSVP</h2>
      {content}
    </div>
  }

  _getContent() {
    const section = this.state.section;

    switch(section) {
      case SECTION_ENTER_NAME: {
        return <form onSubmit={this._onSubmitFullName}>
          <label name="fullname">Full Name</label>
          <div className="single-line-form">
            <input type="text" name="fullname" />
            <button type="submit">Find Me</button>
          </div>
        </form>
      }
      case SECTION_PICK_NAME_MATCH: {
        const options = this.state.namescores.map((namescore) => {
          const name = namescore.name;
          return {value: name, label: name};
        });
        options.push({ value: 0, label: `I'm not listed here :(` })
        return <form onSubmit={this._onSubmitPickName}>
          <span>
            Is this you? If not, pick an option from the list.
          </span>
          <div className="single-line-form">
            <Select
              name="name"
              options={options}
              value={this.state.selectValue}
              onChange={(option) => this.setState({selectValue: option})}
              className="select"
              isClearable />
            <button type="submit">Continue</button>
          </div>
        </form>
      }
      case SECTION_ENTER_RESPONSE: {
        return <form onSubmit={this._onSubmitResponse}>
          <span>
            ~Welcome <b>{this.state.name}</b>!~
          </span><br />
          <label name="num">How many are attending?</label>
          <input type="number" name="num" />
          <br />
          <label name="note">Leave us a note</label>
          <textarea name="note"></textarea>
          <button type="submit" style={{float: 'right'}}>Submit</button>
        </form>
      }
      case SECTION_RESULT_COMPLETE: {
        return <p>Thank you for RSVPing!</p>
      }
      case SECTION_RESULT_NAME_NOT_FOUND: {
        return <p>We couldn't find you :( Contact Cindy or PK to record your RSVP.</p>
      }
      case SECTION_ERROR:
        return <p>
          There was an issue recording your RSVP{` `}
          Maybe the system is down.{` `}
          Please contact Cindy or PK and we'll record your RSVP.
        </p>
    }
  }

  _onSubmitFullName(e) {
    e.preventDefault()
    const fullname = new FormData(e.target).get('fullname')
    this.setState({pending: true})
    this._runScript(
      'AKfycbzmKjyL0frLgC_OU0bGBFGUxGWs7AaD614oHZY1cFkLGlIy_UU',
      {fullname: fullname}
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.setState({ pending: false })
        const namescores = [];
        if (json.result) {
          namescores.push(...json.result.namescores);
        }

        const numExact = namescores.filter((namescore) => namescore.exact).length;
        const hasSingleExact = namescores[0] && namescores[0].exact && numExact === 1;
        if (hasSingleExact) {
          this.setState({
            name: namescores[0].name,
            section: SECTION_ENTER_RESPONSE,
          });
        } else if (namescores.length) {
          this.setState({
            namescores: namescores,
            section: SECTION_PICK_NAME_MATCH,
            selectValue: {
              value: namescores[0].name,
              label: namescores[0].name
            },
          });
        } else {
          this.setState({
            section: SECTION_RESULT_NAME_NOT_FOUND,
          });
        }
      })
      .catch(() => {
        this.setState({
          pending: false,
          section: SECTION_ERROR,
        });
      });
  }

  _onSubmitPickName(e) {
    e.preventDefault()
    const name = new FormData(e.target).get('name')
    if (name == 0) {
      this.setState({
        section: SECTION_RESULT_NAME_NOT_FOUND,
      });
    } else {
      this.setState({
        name: name,
        section: SECTION_ENTER_RESPONSE,
      });
    }
  }

  _onSubmitResponse(e) {
    e.preventDefault()
    const num = new FormData(e.target).get('num')
    const note = new FormData(e.target).get('note')
    this.setState({ pending: true })
    this._runScript(
      'AKfycbyLa_AhGpp6BYqeQ7otM_74YAdfSOxPWxGNFB1DAl3JrMCUeEo',
      {
        name: this.state.name,
        num: num,
        note: note,
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        if (!json.result.success) {
          throw new Error('Failed to record response.');
        }
        this.setState({
          pending: false,
          section: SECTION_RESULT_COMPLETE,
        });
      })
      .catch(() => {
        this.setState({
          pending: false,
          section: SECTION_ERROR,
        });
      });
  }

  _runScript(scriptId, parameters) {
    const fetchParameters = [];
    Object.keys(parameters).forEach(key => {
      fetchParameters.push(`${key}=${encodeURIComponent(parameters[key])}`);
    });
    return fetch(`https://script.google.com/macros/s/${scriptId}/exec?${fetchParameters.join('&')}`);
  }
}

export default RSVPForm
