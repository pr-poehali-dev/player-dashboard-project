import { Button } from "@/components/ui/button";
import { countries } from "@/data/mockData";

interface CountryFilterProps {
  selectedCountry: string | null;
  onCountrySelect: (country: string | null) => void;
}

const CountryFilter = ({
  selectedCountry,
  onCountrySelect,
}: CountryFilterProps) => {
  return (
    <div className="bg-card border border-gray-700 rounded-lg p-4 mb-6">
      <h3 className="font-rubik font-semibold text-white mb-3">
        Фильтр по странам
      </h3>
      <div className="flex flex-wrap gap-2">
        <Button
          variant={selectedCountry === null ? "default" : "outline"}
          size="sm"
          onClick={() => onCountrySelect(null)}
          className="text-sm"
        >
          🌍 Все страны
        </Button>
        {countries.map((country) => (
          <Button
            key={country.code}
            variant={selectedCountry === country.name ? "default" : "outline"}
            size="sm"
            onClick={() => onCountrySelect(country.name)}
            className="text-sm"
          >
            {country.flag} {country.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CountryFilter;
