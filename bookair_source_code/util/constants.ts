// Modules, "." can be used as separator for sub modules
module Constants {
  export class String {
    readonly ONOARDING_1_TITLE = "Search for Flights";
    readonly ONOARDING_2_TITLE = "Book a Flight";
    readonly ONOARDING_3_TITLE = "Get your E-Ticket";
    readonly ONOARDING_1_DESC =
      "Browse flights, track airlines, and compare\nprices to find the best possible option for\nyour travel.";
    readonly ONOARDING_2_DESC =
      "Found a flight that matches your\ndestination and schedule? Book it\ninstantly in just a few taps.";
    readonly ONOARDING_3_DESC =
      "E-ticket for your flight will be stored on\nyour device and in the app’s cloud\nstorage. Bon voyage!";
    readonly GET_STARTED = "Get Started";
    readonly CONTINUE = "Continue";
    readonly TERMS_CONDITIONS =
      "By selecting “Continue” you agree to the BookAir\n End User Privacy Policy";
    readonly SET_LOCATION_DESC =
      "Please set your location. This makes \nit possible for BookAir to give you better\ndog park recommendations.";
    readonly CURRENT_LOCATION = "Current location";
    readonly MIXED = "Mixed";
    readonly ECONOMY = "Economy";
    readonly PREMIUM_ECONOMY = "Premium Economy";
    readonly BUSSINESS = "Business";
    readonly NON_STOP = "Non-Stop";
    readonly FIRST = "First";
    readonly GOOGLE = "Google";
    readonly FACEBOOK = "Facebook";
    readonly TWITTER = "Twitter";
    readonly PUSH_NOTI = "Active push notifications";
    readonly EMAIL_NOTI = "Email notifications";
    readonly SPECIAL_OFFERS = "Special offers";
    readonly GREAT_GETWAYS = "Great getways";
    readonly AIRLINE1 = "Andes Lineas Aereas";
    readonly AIRLINE2 = "Alaska Airlines";
    readonly AIRLINE3 = "Copa Airlines";
    readonly AIRLINE4 = "Avianca";
    readonly AIRLINE5 = "Aerolineas Argentinas";
    readonly AIRLINE6 = "Flybondi";
    readonly AIRLINE7 = "Interjet";
    readonly AIRLINE8 = "Aeromexico";
    readonly SHOW_ALLIANCES = "Show Alliances";
    readonly ADULTS = "Adults";
    readonly SENIOR = "Senior";
    readonly YOUTH = "Youth";
    readonly CHILD = "Child";
    readonly SEAT_INFANTS = "Seat Infant";
    readonly LAP_INFANTS = "Lap Infant";
    readonly ADULTS_DESC = "18-64";
    readonly SENIOR_DESC = "65+";
    readonly YOUTH_DESC = "12-17";
    readonly CHILD_DESC = "2-11";
    readonly SEAT_INFANTS_DESC = "Under 2";
    readonly LAP_INFANTS_DESC = "Under 2";
    readonly BOOK_NOW = "Book Now";
    readonly TICKET_BBAGGAGE_INFO =
      "1 carry-on bag,\n*Additional baggage fee may apply";
  }
  export class Network {
    readonly BASE_URL = "http://partners.api.skyscanner.net/apiservices/";
    readonly SKY_SCANNER_API_KEY = "prtl6749387986743898559646983194";
  }
}
const string = new Constants.String();
const network = new Constants.Network();

export { string, network };
