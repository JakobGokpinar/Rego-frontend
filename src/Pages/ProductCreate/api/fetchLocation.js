async function fetchLocationData (postnumber) {
  try {
          const response = await fetch(`https://secure.geonames.org/postalCodeLookupJSON?postalcode=${postnumber}&country=no&username=goksoft`, {method: 'GET'})
          const { postalcodes } = await response.json();
          return postalcodes.length > 0 ? postalcodes[0].placeName : '';
  } catch (error) { console.error('Error fetching location data', error)}
} 