import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routing/index';

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;







// import  { useState, useEffect } from 'react';
// import { Country, State, City } from 'country-state-city';

// const LocationSelector = () => {
//   const [countries, setCountries] = useState([]);
//   const [states, setStates] = useState([]);
//   const [cities, setCities] = useState([]);

//   const [selectedCountry, setSelectedCountry] = useState('');
//   const [selectedState, setSelectedState] = useState('');

//   useEffect(() => {
//     setCountries(Country.getAllCountries());
//   }, []);

//   const handleCountryChange = (e) => {
//     const countryCode = e.target.value;
//     setSelectedCountry(countryCode);
//     setStates(State.getStatesOfCountry(countryCode));
//     setSelectedState('');
//     setCities([]);
//   };

//   const handleStateChange = (e) => {
//     const stateCode = e.target.value;
//     setSelectedState(stateCode);
//     setCities(City.getCitiesOfState(selectedCountry, stateCode));
//   };

//   return (
//     <div>
//       <select onChange={handleCountryChange} value={selectedCountry}>
//         <option value="">Select Country</option>
//         {countries.map((country) => (
//           <option key={country.isoCode} value={country.isoCode}>
//             {country.name}
//           </option>
//         ))}
//       </select>

//       {states.length > 0 && (
//         <select onChange={handleStateChange} value={selectedState}>
//           <option value="">Select State</option>
//           {states.map((state) => (
//             <option key={state.isoCode} value={state.isoCode}>
//               {state.name}
//             </option>
//           ))}
//         </select>
//       )}

//       {cities.length > 0 && (
//         <select>
//           <option value="">Select City</option>
//           {cities.map((city) => (
//             <option key={city.name} value={city.name}>
//               {city.name}
//             </option>
//           ))}
//         </select>
//       )}
//     </div>
//   );
// };

// export default LocationSelector;