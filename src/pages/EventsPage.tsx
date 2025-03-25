import { useState } from "react"
import toast from "react-hot-toast"
import "./EventsPage.scss"
import { FaRegCalendarAlt } from "react-icons/fa"

interface Event {
  id: string
  title: string
  date: string
  time: string
  location: string
  description: string
  image?: string
  isPast: boolean
}

const mockEvents: Event[] = [
  {
    id: "1",
    title: "Tech Career Workshop",
    date: "2024-04-15",
    time: "2:00 PM - 4:00 PM",
    location: "Virtual Event",
    description:
      "Join us for an interactive workshop on building your tech career. Learn about different career paths, required skills, and how to get started.",
    image: "/images/events/tech-career-workshop.jpg",
    isPast: false,
  },
  {
    id: "2",
    title: "Community Coding Night",
    date: "2024-04-20",
    time: "6:00 PM - 9:00 PM",
    location: "Huckleberry Connect Hub",
    description:
      "A monthly meetup where community members come together to code, share knowledge, and build projects. All skill levels welcome!",
    isPast: false,
  },
  {
    id: "3",
    title: "Youth Tech Summit",
    date: "2024-03-15",
    time: "10:00 AM - 4:00 PM",
    location: "Community Center",
    description:
      "A day of learning, networking, and inspiration for young tech enthusiasts. Featuring workshops, guest speakers, and project showcases.",
    image: "/images/events/youth-summit.jpg",
    isPast: true,
  },
]

const EventImage = ({ image, title }: { image?: string; title: string }) => {
  const [imageError, setImageError] = useState(false)

  if (image && !imageError) {
    return <img src={image} alt={title} onError={() => setImageError(true)} />
  }

  return (
    <div className="placeholder-image">
      <span className="calendar-icon">
        <FaRegCalendarAlt />
      </span>
      {/* <span className="placeholder-text">No Image Available</span> */}
    </div>
  )
}

const EventsPage = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [rsvpForm, setRsvpForm] = useState({
    name: "",
    email: "",
    phone: "",
  })

  const handleRsvp = (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedEvent) {
      toast.success(`Successfully registered for ${selectedEvent.title}!`)
      setSelectedEvent(null)
      setRsvpForm({ name: "", email: "", phone: "" })
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="events">
      {/* Hero Section */}
      <section className="events-hero">
        <div className="container">
          <h1>Events</h1>
          <p className="lead">Join us for exciting tech events and workshops</p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="upcoming-events">
        <div className="container">
          <h2>Upcoming Events</h2>
          <div className="events-grid">
            {mockEvents
              .filter((event) => !event.isPast)
              .map((event) => (
                <div key={event.id} className="event-card">
                  <div className="event-image">
                    <EventImage image={event.image} title={event.title} />
                  </div>
                  <div className="event-content">
                    <h3>{event.title}</h3>
                    <div className="event-details">
                      <p className="date">
                        <span className="icon">📅</span>{" "}
                        {formatDate(event.date)}
                      </p>
                      <p className="time">
                        <span className="icon">⏰</span> {event.time}
                      </p>
                      <p className="location">
                        <span className="icon">📍</span> {event.location}
                      </p>
                    </div>
                    <p className="description">{event.description}</p>
                    <button
                      className="cta-button"
                      onClick={() => setSelectedEvent(event)}
                    >
                      RSVP Now
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="past-events">
        <div className="container">
          <h2>Past Events</h2>
          <div className="events-grid">
            {mockEvents
              .filter((event) => event.isPast)
              .map((event) => (
                <div key={event.id} className="event-card past">
                  <div className="event-image">
                    <EventImage image={event.image} title={event.title} />
                    <div className="past-badge">Past Event</div>
                  </div>
                  <div className="event-content">
                    <h3>{event.title}</h3>
                    <div className="event-details">
                      <p className="date">
                        <span className="icon">📅</span>{" "}
                        {formatDate(event.date)}
                      </p>
                      <p className="time">
                        <span className="icon">⏰</span> {event.time}
                      </p>
                      <p className="location">
                        <span className="icon">📍</span> {event.location}
                      </p>
                    </div>
                    <p className="description">{event.description}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* RSVP Modal */}
      {selectedEvent && (
        <div className="modal-overlay">
          <div className="modal">
            <button
              className="modal-close"
              onClick={() => setSelectedEvent(null)}
            >
              ×
            </button>
            <h2>RSVP for {selectedEvent.title}</h2>
            <p className="event-date">
              {formatDate(selectedEvent.date)} at {selectedEvent.time}
            </p>
            <form onSubmit={handleRsvp} className="rsvp-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  value={rsvpForm.name}
                  onChange={(e) =>
                    setRsvpForm({ ...rsvpForm, name: e.target.value })
                  }
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={rsvpForm.email}
                  onChange={(e) =>
                    setRsvpForm({ ...rsvpForm, email: e.target.value })
                  }
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone (Optional)</label>
                <input
                  type="tel"
                  id="phone"
                  value={rsvpForm.phone}
                  onChange={(e) =>
                    setRsvpForm({ ...rsvpForm, phone: e.target.value })
                  }
                />
              </div>
              <button type="submit" className="cta-button">
                Confirm RSVP
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default EventsPage
