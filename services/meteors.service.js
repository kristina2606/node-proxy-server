const repository = require("../repositories/meteors.repository");
const { parseDateRange } = require("../utils/utils");

const getRefactoredMeteors = async (date, wereDangerousMeteors, count) => {
  const { startDate, endDate } = parseDateRange(date);

  const meteors = await repository.getMeteors(startDate, endDate);

  const transformedData = Object.values(meteors).flatMap((day) =>
    day.map((meteor) => ({
      id: meteor.id,
      name: meteor.name,
      diameter_meters: meteor.estimated_diameter.meters.estimated_diameter_max,
      is_potentially_hazardous_asteroid:
        meteor.is_potentially_hazardous_asteroid,
      close_approach_date_full:
        meteor.close_approach_data[0]?.close_approach_date_full || null,
      relative_velocity_kps:
        meteor.close_approach_data[0]?.relative_velocity
          .kilometers_per_second || null,
    }))
  );

  let filteredData = transformedData;

  if (wereDangerousMeteors) {
    filteredData = filteredData.filter(
      (meteor) =>
        meteor.is_potentially_hazardous_asteroid === wereDangerousMeteors
    );
  }

  if (count) {
    return { count: filteredData.length };
  }

  return filteredData;
};

module.exports = { getRefactoredMeteors };
