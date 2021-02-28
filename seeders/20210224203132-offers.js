'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('offers', [{
      departure: 'Taroudannt',
      arrival: 'Rabat',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-26',
      airport: 'Taroudannt Airport'
    }, 
    {
      departure: 'Rabat',
      arrival: 'Taroudannt',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-26',
      airport: 'Rabat-Salé Airport'
    },
    {
      departure: 'Al Hoceima',
      arrival: 'Agadir',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-26',
      airport: 'Cherif Al Idrissi Airport'
    },
    {
      departure: 'Agadir',
      arrival: 'Al Hoceima',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-26',
      airport: 'Al Massira Airport'
    },
    {
      departure: 'Ben Slimane',
      arrival: 'Beni Mellal',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-26',
      airport: 'Ben Slimane Airport'
    },
    {
      departure: 'Beni Mellal',
      arrival: 'Ben Slimane',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-26',
      airport: 'Beni Mellal Airport'
    },
    {
      departure: 'Bouarfa',
      arrival: 'Casablanca',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-26',
      airport: 'Bouarfa Airport'
    },
    {
      departure: 'Casablanca',
      arrival: 'Bouarfa',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-26',
      airport: 'Mohammed V International Airport'
    },
    {
      departure: 'Errachidia',
      arrival: 'Essaouira ',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-26',
      airport: 'Moulay Ali Cherif Airport'
    },
    {
      departure: 'Essaouira ',
      arrival: 'Errachidia',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-26',
      airport: 'Mogador Airport'
    },
    {
      departure: 'Fes',
      arrival: 'Guelmim',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-26',
      airport: 'Saïss Airport'
    },
    {
      departure: 'Guelmim',
      arrival: 'Fes',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-26',
      airport: 'Guelmim Airport'
    },
    {
      departure: 'Ifrane',
      arrival: 'Marrakech',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-26',
      airport: 'Ifrane Airport'
    },
    {
      departure: 'Marrakech',
      arrival: 'Ifrane',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-26',
      airport: 'Menara Airport'
    },
    {
      departure: 'Nador',
      arrival: 'Ouarzazate',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-26',
      airport: 'Nador Airport'
    },
    {
      departure: 'Ouarzazate',
      arrival: 'Nador',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-26',
      airport: 'Ouarzazate Airport'
    },
    {
      departure: 'Ouezzane',
      arrival: 'Oujda',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-26',
      airport: 'Ouezzane Airport'
    },
    {
      departure: 'Oujda',
      arrival: 'Ouezzane',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-26',
      airport: 'Angads Airport'
    },
    {
      departure: 'Tangier',
      arrival: 'Tan Tan',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-26',
      airport: 'Ibn Battouta Airport'
    },
    {
      departure: 'Tan Tan',
      arrival: 'Tangier',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-26',
      airport: 'Tan Tan Airport'
    },
    {
      departure: 'Taza',
      arrival: 'Tétouan',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-26',
      airport: 'Taza Airport'
    },
    {
      departure: 'Tétouan',
      arrival: 'Taza',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-26',
      airport: 'Sania Ramel Airport'
    },
    {
      departure: 'Zagora',
      arrival: 'Dakhla',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-26',
      airport: 'Zagora Airport'
    },
    {
      departure: 'Dakhla',
      arrival: 'Zagora',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-26',
      airport: 'Dakhla Airport'
    },
    {
      departure: 'El Aaiún',
      arrival: 'Smara',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-26',
      airport: 'Hassan I Airport'
    },
    {
      departure: 'Smara',
      arrival: 'El Aaiún',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-26',
      airport: 'Smara Airport'
    },
    {
      departure: 'Taroudannt',
      arrival: 'Rabat',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-27',
      airport: 'Taroudannt Airport'
    }, 
    {
      departure: 'Rabat',
      arrival: 'Taroudannt',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-27',
      airport: 'Rabat-Salé Airport'
    },
    {
      departure: 'Al Hoceima',
      arrival: 'Agadir',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-27',
      airport: 'Cherif Al Idrissi Airport'
    },
    {
      departure: 'Agadir',
      arrival: 'Al Hoceima',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-27',
      airport: 'Al Massira Airport'
    },
    {
      departure: 'Ben Slimane',
      arrival: 'Beni Mellal',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-27',
      airport: 'Ben Slimane Airport'
    },
    {
      departure: 'Beni Mellal',
      arrival: 'Ben Slimane',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-27',
      airport: 'Beni Mellal Airport'
    },
    {
      departure: 'Bouarfa',
      arrival: 'Casablanca',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-27',
      airport: 'Bouarfa Airport'
    },
    {
      departure: 'Casablanca',
      arrival: 'Bouarfa',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-27',
      airport: 'Mohammed V International Airport'
    },
    {
      departure: 'Errachidia',
      arrival: 'Essaouira ',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-27',
      airport: 'Moulay Ali Cherif Airport'
    },
    {
      departure: 'Essaouira ',
      arrival: 'Errachidia',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-27',
      airport: 'Mogador Airport'
    },
    {
      departure: 'Fes',
      arrival: 'Guelmim',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-27',
      airport: 'Saïss Airport'
    },
    {
      departure: 'Guelmim',
      arrival: 'Fes',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-27',
      airport: 'Guelmim Airport'
    },
    {
      departure: 'Ifrane',
      arrival: 'Marrakech',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-27',
      airport: 'Ifrane Airport'
    },
    {
      departure: 'Marrakech',
      arrival: 'Ifrane',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-27',
      airport: 'Menara Airport'
    },
    {
      departure: 'Nador',
      arrival: 'Ouarzazate',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-27',
      airport: 'Nador Airport'
    },
    {
      departure: 'Ouarzazate',
      arrival: 'Nador',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-27',
      airport: 'Ouarzazate Airport'
    },
    {
      departure: 'Ouezzane',
      arrival: 'Oujda',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-27',
      airport: 'Ouezzane Airport'
    },
    {
      departure: 'Oujda',
      arrival: 'Ouezzane',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-27',
      airport: 'Angads Airport'
    },
    {
      departure: 'Tangier',
      arrival: 'Tan Tan',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-27',
      airport: 'Ibn Battouta Airport'
    },
    {
      departure: 'Tan Tan',
      arrival: 'Tangier',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-27',
      airport: 'Tan Tan Airport'
    },
    {
      departure: 'Taza',
      arrival: 'Tétouan',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-27',
      airport: 'Taza Airport'
    },
    {
      departure: 'Tétouan',
      arrival: 'Taza',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-27',
      airport: 'Sania Ramel Airport'
    },
    {
      departure: 'Zagora',
      arrival: 'Dakhla',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-27',
      airport: 'Zagora Airport'
    },
    {
      departure: 'Dakhla',
      arrival: 'Zagora',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-27',
      airport: 'Dakhla Airport'
    },
    {
      departure: 'El Aaiún',
      arrival: 'Smara',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-27',
      airport: 'Hassan I Airport'
    },
    {
      departure: 'Smara',
      arrival: 'El Aaiún',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-27',
      airport: 'Smara Airport'
    },
    {
      departure: 'Taroudannt',
      arrival: 'Rabat',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-28',
      airport: 'Taroudannt Airport'
    }, 
    {
      departure: 'Rabat',
      arrival: 'Taroudannt',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-28',
      airport: 'Rabat-Salé Airport'
    },
    {
      departure: 'Al Hoceima',
      arrival: 'Agadir',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-28',
      airport: 'Cherif Al Idrissi Airport'
    },
    {
      departure: 'Agadir',
      arrival: 'Al Hoceima',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-28',
      airport: 'Al Massira Airport'
    },
    {
      departure: 'Ben Slimane',
      arrival: 'Beni Mellal',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-28',
      airport: 'Ben Slimane Airport'
    },
    {
      departure: 'Beni Mellal',
      arrival: 'Ben Slimane',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-28',
      airport: 'Beni Mellal Airport'
    },
    {
      departure: 'Bouarfa',
      arrival: 'Casablanca',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-28',
      airport: 'Bouarfa Airport'
    },
    {
      departure: 'Casablanca',
      arrival: 'Bouarfa',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-28',
      airport: 'Mohammed V International Airport'
    },
    {
      departure: 'Errachidia',
      arrival: 'Essaouira ',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-28',
      airport: 'Moulay Ali Cherif Airport'
    },
    {
      departure: 'Essaouira ',
      arrival: 'Errachidia',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-28',
      airport: 'Mogador Airport'
    },
    {
      departure: 'Fes',
      arrival: 'Guelmim',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-28',
      airport: 'Saïss Airport'
    },
    {
      departure: 'Guelmim',
      arrival: 'Fes',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-28',
      airport: 'Guelmim Airport'
    },
    {
      departure: 'Ifrane',
      arrival: 'Marrakech',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-28',
      airport: 'Ifrane Airport'
    },
    {
      departure: 'Marrakech',
      arrival: 'Ifrane',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-28',
      airport: 'Menara Airport'
    },
    {
      departure: 'Nador',
      arrival: 'Ouarzazate',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-28',
      airport: 'Nador Airport'
    },
    {
      departure: 'Ouarzazate',
      arrival: 'Nador',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-28',
      airport: 'Ouarzazate Airport'
    },
    {
      departure: 'Ouezzane',
      arrival: 'Oujda',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-28',
      airport: 'Ouezzane Airport'
    },
    {
      departure: 'Oujda',
      arrival: 'Ouezzane',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-28',
      airport: 'Angads Airport'
    },
    {
      departure: 'Tangier',
      arrival: 'Tan Tan',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-28',
      airport: 'Ibn Battouta Airport'
    },
    {
      departure: 'Tan Tan',
      arrival: 'Tangier',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-28',
      airport: 'Tan Tan Airport'
    },
    {
      departure: 'Taza',
      arrival: 'Tétouan',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-28',
      airport: 'Taza Airport'
    },
    {
      departure: 'Tétouan',
      arrival: 'Taza',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-28',
      airport: 'Sania Ramel Airport'
    },
    {
      departure: 'Zagora',
      arrival: 'Dakhla',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-28',
      airport: 'Zagora Airport'
    },
    {
      departure: 'Dakhla',
      arrival: 'Zagora',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-28',
      airport: 'Dakhla Airport'
    },
    {
      departure: 'El Aaiún',
      arrival: 'Smara',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-28',
      airport: 'Hassan I Airport'
    },
    {
      departure: 'Smara',
      arrival: 'El Aaiún',
      price: 2000,
      dhour: '10h34',
      ahour: '11h45',
      date: '2021-02-28',
      airport: 'Smara Airport'
    },
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('offers', null, {});
  }
};