function flaglabel(country){
const container=document.createElement('div');
container.className="container";
container.innerHTML=`<img class="flag" src=${country.flag}>
        <div class="info">
          <h1>${country.name}</h1>
        <p><span class="subheading">Population:</span>${country.population}</p>
        <p><span class="subheading">Region:</span>${country.region}</p>
          <p><span class="subheading">Capital:</span>${country.capital}</p></div>`;
document.body.append(container);
}

const countryInfo=[{name:"India",
                    population:"1,380,004,385",
                    flag:"https://restcountries.eu/data/ind.svg",
                    region:"Asia",
                    capital:"New Delhi"
                    },
                    {name:"Afghanistan",
                    population:"27657145",
                    flag:"https://restcountries.eu/data/afg.svg",
                    region:"Asia",
                    capital:"Kabul"
                   },                 
                   {name:"Iraq",
                    population:"41,225,633",
                    flag:"https://restcountries.eu/data/irq.svg",
                    region:'Al-Jazeerah',
                    capital:"Baghdad"
                   },
                   {name:"Canada",
                   population:"36155487",
                   flag:"https://restcountries.eu/data/can.svg",
                   region:"Americas",
                   capital:"Ottawa"
                  },
                   {name:"Ireland",
                    population:"6378000",
                    flag:"https://restcountries.eu/data/irl.svg",
                    region:"Europe",
                    capital:"Dublin"
                   }];
for(let i=0;i<5;i++)
{
flaglabel(countryInfo[i]);
}