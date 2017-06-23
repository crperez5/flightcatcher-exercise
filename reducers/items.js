import { ActionTypes } from "../actions/items";

const preloadedFlights = [
  {
    avgPrice: 43,
    currency: "€",
    destinationId: "KTW",
    destinationImage:
      "https://pixabay.com/get/e835b00921fc013ed95c4518b7484f9ee077e6dd04b015489df2c079a3eebd_640.jpg",
    destinationName: "Katowice",
    id: 1498210360990.78
  },
  {
    avgPrice: 56,
    currency: "€",
    destinationId: "EIN",
    destinationImage:
      "https://images.gapyear.com/images/made/images/content/suitcase__582_414.jpg",
    destinationName: "Eindhoven",
    id: 1498210360990.79
  },
  {
    avgPrice: 67,
    currency: "€",
    destinationId: "LYS",
    destinationImage:
      "https://pixabay.com/get/e83db50c29f3043ed95c4518b7484f9ee077e6dd04b015489df2c079a3eebd_640.jpg",
    destinationName: "Lyon",
    id: 1498210360990.8
  },
  {
    avgPrice: 80,
    currency: "€",
    destinationId: "DUS",
    destinationImage:
      "https://pixabay.com/get/eb35b60b21fc013ed95c4518b7484f9ee077e6dd04b015489df2c079a3eebd_640.jpg",
    destinationName: "Dusseldorf",
    id: 1498210360990.81
  },
  {
    avgPrice: 84,
    currency: "€",
    destinationId: "AMS",
    destinationImage:
      "https://pixabay.com/get/eb37b80b29fc093ed95c4518b7484f9ee077e6dd04b015489df2c079a3eebd_640.jpg",
    destinationName: "Amsterdam",
    id: 1498210360990.82
  },
  {
    avgPrice: 95,
    currency: "€",
    destinationId: "FCO",
    destinationImage:
      "https://pixabay.com/get/e833b80828f2053ed95c4518b7484f9ee077e6dd04b015489df2c079a3eebd_640.jpg",
    destinationName: "Rome",
    id: 1498210360990.83
  },
  {
    avgPrice: 101,
    currency: "€",
    destinationId: "TRN",
    destinationImage:
      "https://pixabay.com/get/e833b20c2ffc093ed95c4518b7484f9ee077e6dd04b015489df2c079a3eebd_640.jpg",
    destinationName: "Turin",
    id: 1498210360990.84
  },
  {
    avgPrice: 103,
    currency: "€",
    destinationId: "GVA",
    destinationImage:
      "https://pixabay.com/get/e83db10a2ff1013ed95c4518b7484f9ee077e6dd04b015489df2c079a3eebd_640.jpg",
    destinationName: "Geneva",
    id: 1498210360990.86
  },
  {
    avgPrice: 111,
    currency: "€",
    destinationId: "PRG",
    destinationImage:
      "https://pixabay.com/get/eb34b00a2cf3053ed95c4518b7484f9ee077e6dd04b015489df2c079a3eebc_640.jpg",
    destinationName: "Prague",
    id: 1498210360990.87
  },
  {
    avgPrice: 116,
    currency: "€",
    destinationId: "MUC",
    destinationImage:
      "https://pixabay.com/get/eb36b1062cf0093ed95c4518b7484f9ee077e6dd04b015489df2c079a3eebc_640.jpg",
    destinationName: "Munich",
    id: 1498210360990.88
  },
  {
    avgPrice: 120,
    currency: "€",
    destinationId: "PMI",
    destinationImage:
      "https://pixabay.com/get/e835b5092dfd073ed95c4518b7484f9ee077e6dd04b015489df2c079a3eebc_640.jpg",
    destinationName: "Palma",
    id: 1498210360990.89
  },
  {
    avgPrice: 124,
    currency: "€",
    destinationId: "NAP",
    destinationImage:
      "https://pixabay.com/get/e03cb9092af41c2ad65a5854e2454e95e373eac818b5184997f1c17da4e4_640.jpg",
    destinationName: "Naples",
    id: 1498210360990.9
  },
  {
    avgPrice: 125,
    currency: "€",
    destinationId: "MAN",
    destinationImage:
      "https://pixabay.com/get/e03cb5062cf31c2ad65a5854e2454e95e373eac818b5184997f1c17da4e4_640.jpg",
    destinationName: "Manchester",
    id: 1498210360990.91
  },
  {
    avgPrice: 131,
    currency: "€",
    destinationId: "BOD",
    destinationImage:
      "https://pixabay.com/get/ee36b20d20f31c2ad65a5854e2454e95e373eac818b5184997f1c17da4e4_640.jpg",
    destinationName: "Bordeaux",
    id: 1498210360990.92
  },
  {
    avgPrice: 131,
    currency: "€",
    destinationId: "ALC",
    destinationImage:
      "https://pixabay.com/get/eb34b1082af1063ed95c4518b7484f9ee077e6dd04b015489df2c079a3eebc_640.jpg",
    destinationName: "Alicante",
    id: 1498210360990.93
  },
  {
    avgPrice: 142,
    currency: "€",
    destinationId: "AGP",
    destinationImage:
      "https://pixabay.com/get/e837b40a28f4043ed95c4518b7484f9ee077e6dd04b015489df2c079a3eebc_640.jpg",
    destinationName: "Malaga",
    id: 1498210360990.94
  },
  {
    avgPrice: 154,
    currency: "€",
    destinationId: "PSA",
    destinationImage:
      "https://pixabay.com/get/e835b3092ff7083ed95c4518b7484f9ee077e6dd04b015489df2c079a3eebc_640.jpg",
    destinationName: "Pisa",
    id: 1498210360990.95
  },
  {
    avgPrice: 166,
    currency: "€",
    destinationId: "EDI",
    destinationImage:
      "https://pixabay.com/get/eb34b50820f3023ed95c4518b7484f9ee077e6dd04b015489df2c079a3eebc_640.jpg",
    destinationName: "Edinburgh",
    id: 1498210360990.96
  },
  {
    avgPrice: 168,
    currency: "€",
    destinationId: "BUD",
    destinationImage:
      "https://pixabay.com/get/eb34b30d2ef4003ed95c4518b7484f9ee077e6dd04b015489df2c079a3eebc_640.jpg",
    destinationName: "Budapest",
    id: 1498210360990.97
  },
  {
    avgPrice: 175,
    currency: "€",
    destinationId: "CDG",
    destinationImage:
      "https://pixabay.com/get/e131b20d2afd1c2ad65a5854e2454e95e373eac818b5184997f1c17da4e4_640.jpg",
    destinationName: "Paris",
    id: 1498210360990.98
  },
  {
    avgPrice: 177,
    currency: "€",
    destinationId: "VIE",
    destinationImage:
      "https://pixabay.com/get/eb37b80c20f3093ed95c4518b7484f9ee077e6dd04b015489df2c079a3eebc_640.jpg",
    destinationName: "Vienna",
    id: 1498210360990.99
  }
];

export function favorites(state = [], action) {
  switch (action.type) {
    case ActionTypes.FavItemAdded:
      if (!state.find(f => f.id === action.item.id)) {
        return [action.item, ...state];
      }
      return state;
      break;
    case ActionTypes.FavItemRemoved:
      let index = state.findIndex(f => f.id === action.item.id);
      if (index >= 0) {
        return [...state.slice(0, index), ...state.slice(index + 1)];
      }
      return state;
      break;
    default:
      return state;
  }
}

export function flights(state = preloadedFlights, action) {
  switch (action.type) {
    case ActionTypes.FlightsFetchDataSuccess:
      return action.flights;
    case ActionTypes.UpdateImage:
      var copiedState = state.slice();
      copiedState.find(
        f => f.id === action.flightWithImage.id
      ).destinationImage =
        action.flightWithImage.destinationImage;
      return copiedState;
    default:
      return state;
  }
}
