import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface District {
  name: string;
  url: string;
  area: string;
}

const districts: District[] = [
  // ЮВАО
  { name: 'Южнопортовый', url: 'https://t.me/uzhnoportovi', area: 'ЮВАО' },
  { name: 'Капотня', url: 'https://t.me/teleg_kapotnay', area: 'ЮВАО' },
  { name: 'Лефортово', url: 'https://t.me/teleg_lefortovo', area: 'ЮВАО' },
  { name: 'Некрасовка', url: 'https://t.me/teleg_Nekrasovka', area: 'ЮВАО' },
  { name: 'Печатники', url: 'https://t.me/teleg_Pechatniki', area: 'ЮВАО' },
  { name: 'Выхино-Жулебино', url: 'https://t.me/teleg_vixino', area: 'ЮВАО' },
  { name: 'Рязанский', url: 'https://t.me/Ryzansky_UVAO', area: 'ЮВАО' },
  { name: 'Текстильщики', url: 'https://t.me/Tekstilshiki_UVAO', area: 'ЮВАО' },
  { name: 'Люблино', url: 'https://t.me/teleg_Lublino_UVAO', area: 'ЮВАО' },
  { name: 'Марьино', url: 'https://t.me/teleg_Marino_UVAO', area: 'ЮВАО' },
  { name: 'Кузьминки', url: 'https://t.me/teleg_Kuzminki_UVAO', area: 'ЮВАО' },

  // САО
  { name: 'Савёловский', url: 'https://t.me/Savyolovskij', area: 'САО' },
  { name: 'Ховрино', url: 'https://t.me/Hovrinotop', area: 'САО' },
  { name: 'Тимирязевский', url: 'https://t.me/Timiryazevskijonline', area: 'САО' },
  { name: 'Хорошёвский', url: 'https://t.me/Horoshyovskij', area: 'САО' },
  { name: 'Сокол', url: 'https://t.me/Sokoltoponline', area: 'САО' },
  { name: 'Молжаниновский', url: 'https://t.me/Molzhaninovskij', area: 'САО' },
  { name: 'Алтуфьевский', url: 'https://t.me/Altufevskij', area: 'САО' },
  { name: 'Бабушкинский', url: 'https://t.me/Babushkinskijr', area: 'САО' },
  { name: 'Коптево', url: 'https://t.me/Koptevoonline', area: 'САО' },
  { name: 'Западное Дегунино', url: 'https://t.me/ZapadnoeDeguninoR', area: 'САО' },
  { name: 'Левобережный', url: 'https://t.me/Levoberezhnyj', area: 'САО' },
  { name: 'Головинский', url: 'https://t.me/Golovinskij', area: 'САО' },
  { name: 'Войковский', url: 'https://t.me/Vojkovskij', area: 'САО' },
  { name: 'Бескудниковский', url: 'https://t.me/Beskudnikovskij', area: 'САО' },
  { name: 'Дмитровский', url: 'https://t.me/Dmitrovskijj', area: 'САО' },
  { name: 'Восточное Дегунино', url: 'https://t.me/WeDeguninoV', area: 'САО' },
  { name: 'Аэропорт', url: 'https://t.me/airportSAO', area: 'САО' },
  { name: 'Беговой', url: 'https://t.me/begovoi_teleg', area: 'САО' },

  // ЗАО
  { name: 'Раменки', url: 'https://t.me/teleg_Ramenki', area: 'ЗАО' },
  { name: 'Проспект Вернадского', url: 'https://t.me/teleg_ProspektVernadskogo', area: 'ЗАО' },
  { name: 'Очаково-Матвеевское', url: 'https://t.me/teleg_OchakovoMatveevskoe', area: 'ЗАО' },
  { name: 'Можайский', url: 'https://t.me/teleg_Mozjaysk', area: 'ЗАО' },
  { name: 'Кунцево', url: 'https://t.me/teleg_kuntcevo', area: 'ЗАО' },
  { name: 'Дорогомилово', url: 'https://t.me/Dorogomilovo_teleg', area: 'ЗАО' },
  { name: 'Ново-Переделкино', url: 'https://t.me/teleg_NovoPeredelkino', area: 'ЗАО' },
  { name: 'Крылатское', url: 'https://t.me/teleg_Krylatskoe', area: 'ЗАО' },
  { name: 'Внуково', url: 'https://t.me/Vnukovo_teleg', area: 'ЗАО' },
  { name: 'Солнцево', url: 'https://t.me/Solncevotop_bot', area: 'ЗАО' },
  { name: 'Тропарёво-Никулино', url: 'https://t.me/Troparyvo_Nikulino', area: 'ЗАО' },
  { name: 'Фили-Давыдково', url: 'https://t.me/Fili_Davydkovo_top', area: 'ЗАО' },
  { name: 'Филёвский парк', url: 'https://t.me/FilyovskijPark', area: 'ЗАО' },

  // ВАО
  { name: 'Орехово-Борисово Северное', url: 'https://t.me/Orehovo_Borisovo_Severnoe', area: 'ВАО' },
  { name: 'Орехово-Борисово Южное', url: 'https://t.me/Orehovo_Borisovo_Uzhnoe', area: 'ВАО' },
  { name: 'Северное Измайлово', url: 'https://t.me/official_Severnoe_izmailovo', area: 'ВАО' },
  { name: 'Сокольники', url: 'https://t.me/official_Sokolniki', area: 'ВАО' },
  { name: 'Преображенское', url: 'https://t.me/Preobrazhenskoe_official', area: 'ВАО' },
  { name: 'Измайлово', url: 'https://t.me/teleg_Izmailovo', area: 'ВАО' },
  { name: 'Метрогородок', url: 'https://t.me/teleg_Metrogorodok', area: 'ВАО' },
  { name: 'Новогиреево', url: 'https://t.me/teleg_Novogireevo', area: 'ВАО' },
  { name: 'Косино-Ухтомский', url: 'https://t.me/Kosino_Uhtomskii', area: 'ВАО' },
  { name: 'Богородское', url: 'https://t.me/teleg_Bogorodskoe', area: 'ВАО' },
  { name: 'Гольяново', url: 'https://t.me/teleg_Golyanovo', area: 'ВАО' },
  { name: 'Новокосино', url: 'https://t.me/teleg_Novokosino', area: 'ВАО' },
  { name: 'Перово', url: 'https://t.me/teleg_Perovo', area: 'ВАО' },
  { name: 'Соколиная Гора', url: 'https://t.me/teleg_Sokolinaya_Gora', area: 'ВАО' },
  { name: 'Вешняки', url: 'https://t.me/teleg_Veshnyaki', area: 'ВАО' },
  { name: 'Восточный', url: 'https://t.me/teleg_Vostochnyi', area: 'ВАО' },
  { name: 'Ивановское', url: 'https://t.me/telwg_ivanovskoe', area: 'ВАО' },
  { name: 'Восточное Измайлово', url: 'https://t.me/Vostochnoe_izmailovo', area: 'ВАО' },

  // ЮЗАО
  { name: 'Чертаново Северное', url: 'https://t.me/Chertanovo_Sever', area: 'ЮЗАО' },
  { name: 'Чертаново Центральное', url: 'https://t.me/Chertanovo_Tsentralnoe', area: 'ЮЗАО' },
  { name: 'Чертаново Южное', url: 'https://t.me/Chertanovo_Uzhnoe', area: 'ЮЗАО' },
  { name: 'Царицыно', url: 'https://t.me/Tsaritcyno', area: 'ЮЗАО' },
  { name: 'Бирюлёво Восточное', url: 'https://t.me/Birulovo_Vostochnoe', area: 'ЮЗАО' },
  { name: 'Бирюлёво Западное', url: 'https://t.me/Birulovo_Zapadnoe', area: 'ЮЗАО' },
  { name: 'Москворечье-Сабурово', url: 'https://t.me/Moskvoreche_Saburovo', area: 'ЮЗАО' },
  { name: 'Нагатинский Затон', url: 'https://t.me/Nagatinskii_Zaton', area: 'ЮЗАО' },
  { name: 'Братеево', url: 'https://t.me/teleg_Brateevo', area: 'ЮЗАО' },
  { name: 'Даниловский', url: 'https://t.me/teleg_Danilovskii', area: 'ЮЗАО' },
  { name: 'Донской', url: 'https://t.me/teleg_Donskoi', area: 'ЮЗАО' },
  { name: 'Нагатино-Садовники', url: 'https://t.me/teleg_Nagatino_Sadovniki', area: 'ЮЗAO' },
  { name: 'Нагорный', url: 'https://t.me/teleg_Nagornyi', area: 'ЮЗАО' },
  { name: 'Зябликово', url: 'https://t.me/teleg_Zyablikovo', area: 'ЮЗАО' },
  { name: 'Академический', url: 'https://t.me/teleg_Akademicheskii', area: 'ЮЗАО' },
  { name: 'Гагаринский', url: 'https://t.me/teleg_Gagarinskii', area: 'ЮЗАО' },
  { name: 'Зюзино', url: 'https://t.me/teleg_Zuzino', area: 'ЮЗАО' },
  { name: 'Коньково', url: 'https://t.me/teleg_Konkovo', area: 'ЮЗАО' },
  { name: 'Котловка', url: 'https://t.me/teleg_Kotlovka', area: 'ЮЗАО' },
  { name: 'Ломоносовский', url: 'https://t.me/teleg_Lomonosovskii', area: 'ЮЗАО' },
  { name: 'Обручевский', url: 'https://t.me/Obruchevskii', area: 'ЮЗАО' },
  { name: 'Северное Бутово', url: 'https://t.me/Severnoe_Butovo', area: 'ЮЗАО' },
  { name: 'Тёплый Стан', url: 'https://t.me/Warm_Stan', area: 'ЮЗАО' },
  { name: 'Южное Бутово', url: 'https://t.me/Uzhnoe_Butovo', area: 'ЮЗАО' },

  // ЦАО
  { name: 'Нижегородский', url: 'https://t.me/Nizhegorodski', area: 'ЦАО' },
  { name: 'Мещанский', url: 'https://t.me/Meschanskii', area: 'ЦАО' },
  { name: 'Пресненский', url: 'https://t.me/Presnenskii', area: 'ЦАО' },
  { name: 'Арбат', url: 'https://t.me/teleg_Arbat', area: 'ЦАО' },
  { name: 'Басманный', url: 'https://t.me/teleg_Basmannyi', area: 'ЦАО' },
  { name: 'Хамовники', url: 'https://t.me/teleg_Hamovniki', area: 'ЦАО' },
  { name: 'Таганский', url: 'https://t.me/teleg_Taganski', area: 'ЦАО' },
  { name: 'Красносельский', url: 'https://t.me/telwg_Krasnoselski', area: 'ЦАО' },
  { name: 'Якиманка', url: 'https://t.me/telwg_Yakimanka', area: 'ЦАО' },
  { name: 'Замоскворечье', url: 'https://t.me/Zamoskvorech', area: 'ЦАО' },

  // СЗАО
  { name: 'Куркино', url: 'https://t.me/Kurkinotop', area: 'СЗАО' },
  { name: 'Митино', url: 'https://t.me/Mitinocool', area: 'СЗАО' },
  { name: 'Покровское-Стрешнево', url: 'https://t.me/PokrovskoeStreshnevotop', area: 'СЗАО' },
  { name: 'Северное Тушино', url: 'https://t.me/SevernoeTushinotop', area: 'СЗАО' },
  { name: 'Строгино', url: 'https://t.me/Stroginotop', area: 'СЗАО' },
  { name: 'Хорошёво-Мнёвники', url: 'https://t.me/HoroshyovoMnyovniki', area: 'СЗАО' },
  { name: 'Щукино', url: 'https://t.me/Shukinotop', area: 'СЗАО' },
  { name: 'Южное Тушино', url: 'https://t.me/YuzhnoeTushinotop', area: 'СЗАО' },

  // СВАО
  { name: 'Свиблово', url: 'https://t.me/Sviblovor', area: 'СВАО' },
  { name: 'Северное Медведково', url: 'https://t.me/SevernoeMedvedkovo', area: 'СВАО' },
  { name: 'Северный', url: 'https://t.me/severnyjj', area: 'СВАО' },
  { name: 'Южное Медведково', url: 'https://t.me/YuzhnoeMedvedkovo', area: 'СВАО' },
  { name: 'Ярославский', url: 'https://t.me/Yaroslavskij', area: 'СВАО' },
  { name: 'Алексеевский', url: 'https://t.me/Alekseevskij', area: 'СВАО' },
  { name: 'Бибирево', url: 'https://t.me/Bibirevor', area: 'СВАО' },
  { name: 'Бутырский', url: 'https://t.me/Butyrskij', area: 'СВАО' },
  { name: 'Лианозово', url: 'https://t.me/Lianozovor', area: 'СВАО' },
  { name: 'Лосиноостровский', url: 'https://t.me/Losinoostrovskij', area: 'СВАО' },
  { name: 'Марфино', url: 'https://t.me/marfinor', area: 'СВАО' },
  { name: 'Марьина Роща', url: 'https://t.me/MarinaRoshar', area: 'СВАО' },
  { name: 'Останкинский', url: 'https://t.me/Ostankinskij', area: 'СВАО' },
  { name: 'Отрадное', url: 'https://t.me/Otradnoer', area: 'СВAO' },
  { name: 'Ростокино', url: 'https://t.me/rostokinor', area: 'СВАО' },

  // ТиНАО
  { name: 'Матушкино', url: 'https://t.me/matushkinor', area: 'ТиНАО' },
  { name: 'Савёлки', url: 'https://t.me/savelkii', area: 'ТиНАО' },
  { name: 'Старокрюково', url: 'https://t.me/oldkru', area: 'ТиНАО' },
  { name: 'Силино', url: 'https://t.me/silinoo', area: 'ТиНАО' },
  { name: 'Крюково', url: 'https://t.me/krukovoo', area: 'ТиНАO' },
  { name: 'Тверской', url: 'https://t.me/teleg_Tverskoi', area: 'ТиНАО' }
];

const areas = ['Все', 'ЦАО', 'САО', 'СВАО', 'ВАО', 'ЮВАО', 'ЮАО', 'ЮЗАО', 'ЗАО', 'СЗАО', 'ТиНАО'];

const DistrictsSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArea, setSelectedArea] = useState('Все');

  const filteredDistricts = districts.filter(district => {
    const matchesSearch = district.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesArea = selectedArea === 'Все' || district.area === selectedArea;
    return matchesSearch && matchesArea;
  });

  return (
    <section className="animate-slide-up">
      <Card className="bg-white/95 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-2xl">
        <h2 className="text-3xl md:text-4xl font-sf-pro font-bold text-moscow-gray mb-8 text-center">
          Районные медиа
        </h2>
        
        <div className="space-y-6 mb-8">
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Icon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                placeholder="Найти район..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 rounded-xl border-gray-200 focus:border-telegram"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {areas.map((area) => (
              <Button
                key={area}
                variant={selectedArea === area ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedArea(area)}
                className={
                  selectedArea === area 
                    ? "bg-telegram hover:bg-telegram-dark text-white px-4 py-2 rounded-lg"
                    : "border-gray-300 text-gray-600 hover:border-telegram hover:text-telegram px-4 py-2 rounded-lg"
                }
              >
                {area}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredDistricts.map((district) => (
            <div
              key={district.name}
              className="flex items-center justify-between p-4 rounded-xl bg-moscow-light/30 hover:bg-moscow-light/50 transition-colors group"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-telegram/10 rounded-lg flex items-center justify-center">
                  <Icon name="MapPin" className="text-telegram" size={16} />
                </div>
                <div>
                  <h3 className="font-medium text-moscow-gray group-hover:text-telegram transition-colors">
                    {district.name}
                  </h3>
                  <p className="text-sm text-gray-500">{district.area}</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open(district.url, '_blank')}
                className="opacity-0 group-hover:opacity-100 transition-opacity text-telegram hover:bg-telegram/10"
              >
                <Icon name="ExternalLink" size={16} />
              </Button>
            </div>
          ))}
        </div>

        {filteredDistricts.length === 0 && (
          <div className="text-center py-12">
            <Icon name="Search" className="mx-auto text-gray-300 mb-4" size={48} />
            <p className="text-gray-500">Район не найден. Попробуйте изменить поисковый запрос.</p>
          </div>
        )}

        <div className="text-center pt-8 border-t border-gray-100 mt-8">
          <p className="text-gray-600 mb-4">
            Всего районов: <span className="font-semibold text-telegram">{districts.length}</span>
          </p>
          <Button
            variant="outline"
            onClick={() => window.open('https://t.me/Moscvich_bot', '_blank')}
            className="border-telegram text-telegram hover:bg-telegram hover:text-white px-6 py-3 rounded-xl"
          >
            <Icon name="Bot" className="mr-2" size={20} />
            Найти канал через бота
          </Button>
        </div>
      </Card>
    </section>
  );
};

export default DistrictsSection;