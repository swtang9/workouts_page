import YearStat from '@/components/YearStat';
import useActivities from '@/hooks/useActivities';
import { INFO_MESSAGE } from '@/utils/const';

const YearsStat = ({ year, onClick }: { year: string, onClick: (_year: string) => void }) => {
  const { years } = useActivities();
  // make sure the year click on front
  let yearsArrayUpdate = years.slice();
  yearsArrayUpdate.push('Total');
  yearsArrayUpdate = yearsArrayUpdate.filter((x) => x !== year);
  yearsArrayUpdate.unshift(year);

  // for short solution need to refactor
  return (
    <div className="w-full lg:w-full pb-16 pr-16 lg:pr-16">
      <section className="pb-0">
      <p style={quoteStyle}>&ndash; &ndash; Keep going & Fight on!</p>
      <br />
      <br />
        <p className="leading-relaxed">
          {INFO_MESSAGE(years.length, year)}
          <br />
        </p>
      </section>
      <hr color="white" />
      {yearsArrayUpdate.map((year) => (
        <YearStat key={year} year={year} onClick={onClick} />
      ))}
      {// eslint-disable-next-line no-prototype-builtins
        yearsArrayUpdate.hasOwnProperty('Total') ? (
          <YearStat key="Total" year="Total" onClick={onClick} />
        ) : (
          <div />
        )}
    </div>
  );
};

const quoteStyle = {
    fontWeight: "bold",
    textAlign: "left",
    fontFamily: "Arial, sans-serif",
    fontStyle: "italic",        
    fontSize: "22px",
    color: "white"
};


export default YearsStat;
