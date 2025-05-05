import DontMissEvents from "../components/DontMissEvents"
import EventsPageCarousel from "../components/EventsPageCarousel"
import EventsCarousel from "../components/EventsCarousel"
import FrequentlyAsked from "../components/FrequentlyAsked"
import NewsLetterSubscribe from "../components/NewsLetterSubscribe"

const Events = () => {
  return (
    <div>
      <div className="bg-primary py-5">
        < EventsPageCarousel />
      </div>

      <DontMissEvents />

      <EventsCarousel />

      <FrequentlyAsked />

      <NewsLetterSubscribe />
    </div>
  )
}

export default Events
