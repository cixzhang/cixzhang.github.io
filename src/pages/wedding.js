import React from 'react'

import RSVPForm from '../components/wedding/RSVPForm'
import Section from '../components/wedding/Section'
import Layout from '../components/wedding/Layout'
import WeddingMap from '../components/wedding/WeddingMap'

class Wedding extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <Layout>
        <Section title="Info">
          <p>Join us for a wedding ceremony and a picnic in the park!</p>
          <p>
            Lunch will be provided.<br />
            No alcohol.<br />
            Plenty of activities. :)
          </p>
        </Section>
        <div className="location-and-time">
          <div className="location-and-time-info">
            <Section title="Date and Time">
              <p>
                <strong>March 30, 2019</strong><br />
                <span>Ceremony starts 10am</span><br />
                <span>Picnic reception from 11am to 2pm</span>
              </p>
            </Section>
            <Section title="Location/Address">
              <p>
                <strong>Schabarum Regional Park, Gazebo</strong><br />
                <span>17250 E Colima Rd<br />Rowland Heights, California</span>
              </p>
              <p>
                <strong>Coordinates:</strong> 33.985469, -117.927168<br />
                <a target="_blank" href="https://goo.gl/maps/7LGcA5vmMky">Google Maps</a>
              </p>
              <p>
                <strong>Parking:</strong> The park has plenty of
                spaces next to the Gazebo. There's a vehicle entrance
                fee: <strong>$6</strong>, cash or credit. Unfortunately,
                the park does not provide prepaid vehicle entrance tickets,
                so contact us if you would like a reimbursement.
                You can also park across the street at La Puente Hills Mall for free.
              </p>
            </Section>
          </div>
          <WeddingMap />
        </div>
        <Section title="Dress Code">
          <p>
            Cocktail or semi-casual attire. Dress comfortably.
            There will be grassy areas so you may want to avoid pointy heels.
          </p>
        </Section>
        <Section title="Gifts">
          <p>
            Your presence is the best gift of all! We're decluttering and
            would like to avoid accumulating more items, so no gifts necessary.
          </p>
        </Section>
        <Section title="Accomodations">
          <p>
            For those of you travelling from out of town,{` `}
            <a href="https://goo.gl/maps/HJuLJgv2oL32" target="_blank">Marriott
            Courtyard</a> is right next to the park. Let us know if you need any assistance
            with accomodations!
          </p>
        </Section>
        <RSVPForm />
      </Layout>
    )
  }
}

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         apis {
//           googleMaps
//         }
//       }
//     }
//   }
// `

export default Wedding
