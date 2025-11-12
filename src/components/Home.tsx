import { useEffect, useState, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";

function Home() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [enquiryForm, setEnquiryForm] = useState({ name: "", email: "", message: "" });
  const [homestaysExpanded, setHomestaysExpanded] = useState(false);
  const [hotelsExpanded, setHotelsExpanded] = useState(false);
  const [flightsExpanded, setFlightsExpanded] = useState(false);

  // Hero carousel images and titles
  const heroSlides = [
    { image: "/img/badrinath.jpg", title: "The Badrinath", subtitle: "Contact" },
    { image: "/img/rameshwarm.jpg", title: "Rameshwaram", subtitle: "Contact" },
    { image: "/img/jaipur.jpg", title: "The Pink City Of Jaipur", subtitle: "Contact" },
    { image: "/img/rajasthan.jpg", title: "Rajasthan", subtitle: "Contact" },
    { image: "/img/himalay.jpg", title: "Himalayas Mountain range in Asia", subtitle: "Contact" },
    { image: "/img/goechala.jpg", title: "Goechala, Sikkim", subtitle: "Contact" },
    { image: "/img/darjeeling.jpg", title: "Darjeeling, West Bengal", subtitle: "Contact" },
    { image: "/img/pondicherry.jpg", title: "Pondicherry, Puducherry", subtitle: "Contact" },
  ];

  const [heroIndex, setHeroIndex] = useState(0);
  const heroTimerRef = useRef<number | null>(null);

  const nextHero = () => setHeroIndex((i) => (i + 1) % heroSlides.length);
  const prevHero = () => setHeroIndex((i) => (i - 1 + heroSlides.length) % heroSlides.length);

  useEffect(() => {
    heroTimerRef.current = window.setInterval(nextHero, 4000);
    return () => {
      if (heroTimerRef.current !== null) {
        clearInterval(heroTimerRef.current);
      }
    };
  }, []);

  const restartHeroTimer = () => {
    if (heroTimerRef.current !== null) {
      clearInterval(heroTimerRef.current);
    }
    heroTimerRef.current = window.setInterval(nextHero, 4000);
  };

  const handleHeroPrev = () => {
    prevHero();
    restartHeroTimer();
  };

  const handleHeroNext = () => {
    nextHero();
    restartHeroTimer();
  };

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Enquiry submitted:", enquiryForm);
    setEnquiryForm({ name: "", email: "", message: "" });
    setEnquiryOpen(false);
    alert("Thank you for your enquiry! We will contact you soon.");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      
      <section className="relative w-full h-[700px] md:h-[600px] overflow-hidden">
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              i === heroIndex ? "opacity-100 z-20" : "opacity-0 z-10"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
          </div>
        ))}

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-30 px-4">
          <div className=" rounded-2xl p-8 md:p-12 shadow-2xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 drop-shadow-2xl bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
              Welcome to Jingle Holiday Bazar Pvt Ltd.
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-bold mb-8 drop-shadow-lg text-yellow-200">
              {heroSlides[heroIndex].title}
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-10 py-4 rounded-full text-lg font-bold transition-all duration-300 shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-110">
              Contact
            </button>
          </div>
        </div>

        <button
          onClick={handleHeroPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-4 rounded-full z-40 transition-all duration-300 shadow-lg hover:scale-110"
          aria-label="Previous"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={handleHeroNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-4 rounded-full z-40 transition-all duration-300 shadow-lg hover:scale-110"
          aria-label="Next"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center gap-3 z-40">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setHeroIndex(i);
                restartHeroTimer();
              }}
              className={`rounded-full transition-all duration-300 ${
                i === heroIndex 
                  ? "bg-white w-12 h-3 scale-110 shadow-lg" 
                  : "bg-white/50 w-3 h-3 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </section>


      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              OUR SERVICES
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              At Jingle Holiday Bazar, we are committed to ensuring that you save on every trip and every holiday
              booking you make with us by bringing to you the best price deals; be it flights, tours or hotels. Our unique budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Homestays */}
            <div key="homestays" className={`bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 border-2 ${
              homestaysExpanded 
                ? 'border-green-400' 
                : 'border-transparent hover:border-green-200'
            } transform hover:-translate-y-2`}>
              <div className="flex items-center justify-center mb-6">
                <div className="bg-green-100 p-4 rounded-full">
                  <svg className="w-16 h-16 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Jingle Holiday Bazar Homestays</h3>
              <p className="text-gray-600 mb-4 font-semibold text-lg">Book Villas, Apartments and Resorts</p>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${homestaysExpanded ? 'max-h-[500px]' : 'max-h-32'}`}>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {homestaysExpanded ? (
                    <>
                      Jingle Holiday Bazar.com ventured into Homestays in India in 2015, and is providing great homestay experiences
                      to its customers as well as benefits to its hosts. If you are looking for a holiday with a difference, want to
                      closely savour the local flavours of a place, and prefer the comforts of a homely environment, Jingle Holiday
                      Bazar Homestays is the answer. Jingle Holiday Bazar already has over 3500 homestay properties and is expanding fast.
                      It has a stronghold in South India and across most hill stations of North India, with these places providing unique
                      homestay experiences to customers. Some of its most popular homestay destinations are Goa, Manali, Shimla, Coorg,
                      Wayanad, among other places.
                    </>
                  ) : (
                    <>
                      Jingle Holiday Bazar.com ventured into Homestays in India in 2015, and is providing great homestay experiences
                      to its customers as well as benefits to its hosts. If you are looking for a holiday with a difference, want to
                      closely savour the local flavours of a place, and prefer the comforts of a homely environment, Jingle Holiday
                      Bazar Homestays is the answer.
                    </>
                  )}
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setHomestaysExpanded(!homestaysExpanded);
                }}
                className="mt-6 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-2 rounded-lg font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
              >
                {homestaysExpanded ? "Read Less" : "Read More"}
              </button>
            </div>

            {/* Hotels */}
            <div key="hotels" className={`bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 border-2 ${
              hotelsExpanded 
                ? 'border-blue-400' 
                : 'border-transparent hover:border-blue-200'
            } transform hover:-translate-y-2`}>
              <div className="flex items-center justify-center mb-6">
                <div className="bg-blue-100 p-4 rounded-full">
                  <svg className="w-16 h-16 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Jingle Holiday Bazar Hotels</h3>
              <p className="text-gray-600 mb-4 font-semibold text-lg">Book Hotels with Jingle Holiday Bazar.com</p>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${hotelsExpanded ? 'max-h-[500px]' : 'max-h-32'}`}>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {hotelsExpanded ? (
                    <>
                      We are back in the post-pandemic world with a bouquet of hotels across Indian cities ranging from leisure to
                      business ones with a new outlook. Jingle Holiday Bazar who has always been on the forefront of assuring a
                      comfortable stay which is a bang for your bucks, is offering you online hotel booking that guarantees you
                      hygienic, sanitised rooms across hotels in India. Explore a raft of interesting features such as Clean Pass stays,
                      travel again offers and long stay discounts encouraging you to travel again, make your hotel booking while keeping
                      your anxieties at bay.
                    </>
                  ) : (
                    <>
                      We are back in the post-pandemic world with a bouquet of hotels across Indian cities ranging from leisure to
                      business ones with a new outlook. Jingle Holiday Bazar who has always been on the forefront of assuring a
                      comfortable stay which is a bang for your bucks, is offering you online hotel booking that guarantees you
                      hygienic, sanitised rooms across hotels in India.
                    </>
                  )}
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setHotelsExpanded(!hotelsExpanded);
                }}
                className="mt-6 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-2 rounded-lg font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
              >
                {hotelsExpanded ? "Read Less" : "Read More"}
              </button>
            </div>

            {/* Flights */}
            <div key="flights" className={`bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 border-2 ${
              flightsExpanded 
                ? 'border-cyan-400' 
                : 'border-transparent hover:border-cyan-200'
            } transform hover:-translate-y-2`}>
              <div className="flex items-center justify-center mb-6">
                <div className="bg-cyan-100 p-4 rounded-full">
                  <svg className="w-16 h-16 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Jingle Holiday Bazar flights</h3>
              <p className="text-gray-600 mb-4 font-semibold text-lg">Why to book Flights Online with Jingle Holiday Bazar.com</p>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${flightsExpanded ? 'max-h-[500px]' : 'max-h-32'}`}>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {flightsExpanded ? (
                    <>
                      Purchasing flight tickets and confirming your flight booking is the key aspect of planning a trip. Now whether
                      you are travelling for business or on leisure, you cannot make an itinerary until you have first and foremost
                      booked your flights. Procuring an air ticket is a mandatory first step once your travel plans are confirmed.
                      It feels as though half the job is done the moment you secure confirmed flight ticket booking in your hand.
                      The entire activity of searching air connectivity between two cities, checking the schedule of the flight and
                      zeroing in on one that's most convenient to you can feel like a lot of work especially if you are in a hurry to book your flights.
                    </>
                  ) : (
                    <>
                      Purchasing flight tickets and confirming your flight booking is the key aspect of planning a trip. Now whether
                      you are travelling for business or on leisure, you cannot make an itinerary until you have first and foremost
                      booked your flights. Procuring an air ticket is a mandatory first step once your travel plans are confirmed.
                    </>
                  )}
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setFlightsExpanded(!flightsExpanded);
                }}
                className="mt-6 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white px-6 py-2 rounded-lg font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
              >
                {flightsExpanded ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations - Domestic */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              POPULAR DESTINATION IN INDIA
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              India is a vibrant land of startling contrasts where both the traditional and modern worlds meet.
              The world's seventh largest nation by area and the second largest in terms of population, India boasts a rich
              heritage that's the result of centuries of different cultures and religions leaving their mark
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
              <div className="overflow-hidden">
                <img src="img/Jallianwala.jpg" alt="Amritsar" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6 bg-gradient-to-b from-white to-gray-50">
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">Amritsar, Punjab</h3>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
              <div className="overflow-hidden">
                <img src="/img/Gangtok.jpg" alt="Gangtok" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6 bg-gradient-to-b from-white to-gray-50">
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">Gangtok, Sikkim</h3>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
              <div className="overflow-hidden">
                <img src="/img/Tajmahal.jpg" alt="Agra" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6 bg-gradient-to-b from-white to-gray-50">
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">Agra Uttar Pradesh</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations - International */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              POPULAR DESTINATION INTERNATIONAL
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Mother Earth along with mankind have co-created some of the most spectacular places on this planet.
              From sprawling cities to spectacular national parks, it is hard to keep your bucket list stagnant. Keeping in mind
              iconic attractions, culture, food and ease of travel, these are the best places in the world to visit!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-6xl mx-auto">
            
            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="h-full min-h-[400px] overflow-hidden">
                <img src="/img/Dubai.jpg" alt="Dubai" className="w-full h-full z-0 overflow-hidden object-cover" />     
                <div className="h-full bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>
                  
                  
                </div>
                
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-5xl md:text-6xl font-extrabold text-white z-10 drop-shadow-2xl">DUBAI</h3>
                <p className="text-white font-semibold text-lg">Explore the luxury and modern architecture</p>
              </div>
            </div>

            {/* Right Column - Two Stacked Images */}
            <div className="flex flex-col gap-4">
              {/* Top - Sydney */}
              <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex-1">
                <div className="h-full min-h-[290px] overflow-hidden">
                <img src="/img/sydeny.jpg" alt="Sydney" className="w-full h-full z-0 overflow-hidden object-cover" />
                  <div className="h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>
                    
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-4xl md:text-5xl font-extrabold text-white z-10 drop-shadow-2xl">SYDNEY</h3>
                  <p className="text-white font-semibold">Discover the iconic Opera House</p>
                </div>
              </div>


              <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex-1">
                <div className="h-full min-h-[290px] overflow-hidden">
                <img src="/img/singapore.jpg" alt="Sydney" className="w-full h-full z-0 overflow-hidden object-cover" />
                  <div className="h-full bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>
                    
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-4xl md:text-5xl font-extrabold text-white z-10 drop-shadow-2xl">SINGAPORE</h3>
                  <p className="text-white font-semibold">Experience the perfect blend of cultures</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              FEATURED TOURS IN INDIA
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              India is a vibrant land of startling contrasts where both the traditional and modern worlds meet. The world's seventh
              largest tourist nation by area and the second largest in terms of population
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Tour 1 */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative overflow-hidden h-64">
                <img 
                  src="/img/himalay.jpg" 
                  alt="Thiksey Monastery" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  Popular
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-xl font-bold drop-shadow-lg">Week At Thiksey Monastery</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  This 12-storey complex hosts over 500 monks and is considered to be one of the most beautiful Buddhist
                  monasteries in all of Ladakh. For Ladakh sightseeing, Thiksey Gompa will enlighten you with knowledge about
                  some of the Buddhist culture, lifestyle, scriptures, statues and even paintings.
                </p>
                <button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.408.148-.673.149-.198.297-.297.445-.446.149-.15.297-.297.446-.446.297-.297.644-.446.941-.297.297.15.644.446.941.594.297.15.445.297.644.446.198.15.297.297.445.446.149.15.297.297.297.594 0 .297-.149.594-.297.891-.149.297-.297.594-.594.891zM12 0C5.373 0 0 5.373 0 12c0 2.126.577 4.125 1.585 5.84L0 24l6.305-1.515C7.988 23.483 9.95 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                  </svg>
                  WhatsApp Now
                </button>
              </div>
            </div>

            {/* Tour 2 */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative overflow-hidden h-64">
                <img 
                  src="/img/darjeeling.jpg" 
                  alt="Solang Valley" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  Featured
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-xl font-bold drop-shadow-lg">Week At Solang Valley, Manali</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  A mini valley located at about 8400 feet above sea level, Solang Nala is a short drive away from Manali.
                  If you are looking for snow-based activities and sports, winters are the best time to visit
                </p>
                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact
                </button>
              </div>
            </div>

            {/* Tour 3 */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative overflow-hidden h-64">
                <img 
                  src="/img/pondicherry.jpg" 
                  alt="Goa Beach" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 bg-cyan-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  New
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-xl font-bold drop-shadow-lg">Week At Beach in Goa</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Goa is the smallest state in India, Goa is synonymous to many captivating things that are best showcase of
                  a life without stress and worries. The multitude of beaches in Goa
                </p>
                <button className="w-full bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 text-white px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Gallery
            </h2>
            <p className="text-gray-600 text-lg">At Jingle Holiday Bazar All Over India Destination Gallery</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "New Delhi", image: "/img/akshardham.jpg" },
              { name: "Shimla", image: "/img/himalay.jpg" },
              { name: "Agra", image: "/img/Tajmahal.jpg" },
              { name: "Kullu and Manali", image: "/img/darjeeling.jpg" },
              { name: "Mussoorie and Dehradun", image: "/img/mussoorie.jpg" },
              { name: "Dalhousie", image: "/img/khajjiar.jpg" },
              { name: "Jim Corbett National Park", image: "/img/Jim-Corbett.jpg" },
              { name: "Amritsar", image: "/img/Jallianwala.jpg" },
            ].map((item, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
              >
                <div className="relative overflow-hidden h-56 md:h-64">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125 group-hover:rotate-2" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 border-4 border-white/0 group-hover:border-white/30 transition-all duration-500"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/70 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white font-bold text-sm md:text-base text-center drop-shadow-lg">
                    {item.name}
                  </p>
                </div>
                <div className="p-3 bg-white">
                  <p className="text-sm font-semibold text-gray-800 text-center group-hover:text-blue-600 transition-colors">
                    {item.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Hotels */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              POPULAR HOTELS
            </h2>
            <p className="text-gray-600 text-lg">At Jingle Holiday Bazar Provide Best Hotel facility National And International</p>
          </div>

          <div className="space-y-8">
            
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative overflow-hidden h-64 md:h-auto min-h-[300px]">
                  <img 
                    src="/img/Taj-Aravali.jpg" 
                    alt="Taj Aravali Resort & Spa" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Taj Aravali Resort & Spa</h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    Prices for Taj Aravali Resort and Spa one of the best hotels in India, starts at <span className="font-bold text-blue-600">₹ 12,999+</span> per night
                  </p>
                </div>
              </div>
            </div>

            
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
              <div className="flex flex-col">
                <div className="relative overflow-hidden h-64 md:h-80">
                  <img 
                    src="/img/5.jpg" 
                    alt="Hideout Premiere" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Hideout Premiere</h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                  Hideout Resorts is a collection of elegantly designed hotels and resorts in Goa that aim to give our guests the opportunity to enjoy Goa in all her glory. Whether it’s the beaches<span className="font-bold text-blue-600"> ₹ 4499+</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Hotel 3 - Image Left, Text Right */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative overflow-hidden h-64 md:h-auto min-h-[300px]">
                  <img 
                    src="/img/6.jpg" 
                    alt="Hotel Mountain face by Snow City Hotels" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Hotel Mountain face by Snow City Hotels</h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                  Set in Manāli Hotel Mountain face by Snow City Hotels offers accommodation with a restaurant, free private parking, a shared lounge and a garden.<span className="font-bold text-blue-600">₹ 1,440+</span> per night
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Enquiry/Social Buttons */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        <button
          onClick={() => setEnquiryOpen(!enquiryOpen)}
          className="bg-black text-white px-4 py-3 rounded-md text-sm font-semibold shadow-lg hover:bg-gray-800 transition"
        >
          Enquiry
        </button>
        <a
          href="mailto:jingleholidaybazar@gmail.com"
          className="bg-red-600 text-white p-3 rounded-md shadow-lg hover:bg-red-700 transition"
          aria-label="Email"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
        </a>
        <a
          href="tel:+918506922777"
          className="bg-red-600 text-white p-3 rounded-md shadow-lg hover:bg-red-700 transition"
          aria-label="Phone"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
        </a>
        <a
          href="https://wa.me/918506922777"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-3 rounded-md shadow-lg hover:bg-green-600 transition"
          aria-label="WhatsApp"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.408.148-.673.149-.198.297-.297.445-.446.149-.15.297-.297.446-.446.297-.297.644-.446.941-.297.297.15.644.446.941.594.297.15.445.297.644.446.198.15.297.297.445.446.149.15.297.297.297.594 0 .297-.149.594-.297.891-.149.297-.297.594-.594.891zM12 0C5.373 0 0 5.373 0 12c0 2.126.577 4.125 1.585 5.84L0 24l6.305-1.515C7.988 23.483 9.95 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
          </svg>
        </a>
      </div>

      {/* Enquiry Modal */}
      {enquiryOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
            <button
              onClick={() => setEnquiryOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">CONTACT</h2>
            <form onSubmit={handleEnquirySubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  value={enquiryForm.name}
                  onChange={(e) => setEnquiryForm({ ...enquiryForm, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  value={enquiryForm.email}
                  onChange={(e) => setEnquiryForm({ ...enquiryForm, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea
                  required
                  value={enquiryForm.message}
                  onChange={(e) => setEnquiryForm({ ...enquiryForm, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-semibold transition"
                >
                  Send
                </button>
                <button
                  type="button"
                  onClick={() => setEnquiryOpen(false)}
                  className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-md font-semibold transition"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Home;