type person = {
  title: string;
  status: boolean;
  id: number;
}; 
const masai: person = {
  title: "masai",
  status: true,
  id:10
  
};
 interface Address {
   houseNumber: number;
   street: string;
   city: string;
   state: string;
   postalCode: number;
   country: string;
}
 interface PersonDetails {
   prefix ?: number;
   phones : [number,number,number];
   address: [Address,Address];
   email?: string;
   firstname?: number;
   lasename?: string;

}
