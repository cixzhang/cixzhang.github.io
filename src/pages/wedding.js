import React from 'react'

import RSVPForm from '../components/wedding/RSVPForm'
import Section from '../components/wedding/Section'
import Layout from '../components/wedding/Layout'

class Wedding extends React.Component {
  render() {
    return (
      <Layout>
        <Section title="Info">
          <p>Join us for a wedding ceremony and a picnic in the park!</p>
          <p>
            <strong>March 30, 2019</strong><br />
            <span>Ceremony starts 10am</span>
          </p>
          <p>
            <strong>Schabarum Regional Park</strong><br />
            <span>17250 E Colima Rd, Rowland Heights, California</span>
          </p>
          <p>
            Lunch will be provided.<br />
            No alcohol.<br />
            Plenty of activities. :)
          </p>
        </Section>
        <Section title="Dress Code">
          <p>
            Semi-Casual. There will be grassy areas so you
            may want to avoid pointy heels.
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
        <Section title="Parking">
          <p>
            The park has plenty of parking.
            There is a vehicle entrance fee of <strong>$6</strong> to enter on weekends.
            Prepaid tickets are only available starting the week prior to the wedding.
            If you would like a prepaid ticket and can meet us at least a day prior to the event,
            let us know!
          </p>
        </Section>
        <RSVPForm />
      </Layout>
    )
  }
}

export default Wedding
