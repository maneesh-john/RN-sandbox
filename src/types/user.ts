export type Identity = {
  title: string;
  first: string;
  last: string;
}

export type Address = {
  street: {
    number: number;
    name: string;
  };
  city: string;
  state: string;
  country: string;
  coordinates: {
    latitude: string;
    longitude: string;
    timezone: {
      offset: string;
      description: string;
    }
  }
}

export type User = {
  gender: string;
  name: Identity;
  location: Address;
  email: string;
  dob: {
    date: string;
    age: number;
  };
  registered: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string | null;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}