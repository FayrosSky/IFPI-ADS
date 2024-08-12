interface SensorReading {
    sensorId: string;
    readingType: string;
    value: number;
    timestamp: Date;
  }
  
  interface SensorCalibration {
    sensorId: string;
    calibrationFunction: (value: number) => number;
  }
  
  interface SensorStatistics {
    sensorId: string;
    readingType: string;
    mean: number;
    max: number;
    min: number;
  }
  
  function processSensorReadings(readings: SensorReading[], calibrations: SensorCalibration[]): SensorStatistics[] {
    const statistics: SensorStatistics[] = [];
  
    readings.forEach((reading) => {
      const sensorId = reading.sensorId;
      const readingType = reading.readingType;
      const value = reading.value;
  
      const calibration = calibrations.find((calibration) => calibration.sensorId === sensorId);
      if (calibration) {
        value = calibration.calibrationFunction(value);
      }
  
      const statisticsForSensor = statistics.find((stat) => stat.sensorId === sensorId);
      if (!statisticsForSensor) {
        statistics.push({
          sensorId,
          readingType,
          mean: 0,
          max: 0,
          min: 0,
        });
      }
  
      const index = statistics.findIndex((stat) => stat.sensorId === sensorId && stat.readingType === readingType);
      if (index !== -1) {
        const stat = statistics[index];
        stat.mean += value;
        stat.max = Math.max(stat.max, value);
        stat.min = Math.min(stat.min, value);
      }
    });
  
    statistics.forEach((stat) => {
      stat.mean /= readings.filter((reading) => reading.sensorId === stat.sensorId).length;
    });
  
    return statistics;
  }
  
  // Exemplo de uso
  const readings: SensorReading[] = [
    { sensorId: "sensor1", readingType: "temperature", value: 25, timestamp: new Date("2023-07-15T14:00:00.000Z") },
    { sensorId: "sensor1", readingType: "temperature", value: 26, timestamp: new Date("2023-07-15T14:01:00.000Z") },
    { sensorId: "sensor2", readingType: "humidity", value: 60, timestamp: new Date("2023-07-15T14:00:00.000Z") },
    { sensorId: "sensor2", readingType: "humidity", value: 62, timestamp: new Date("2023-07-15T14:01:00.000Z") },
  ];
  
  const calibrations: SensorCalibration[] = [
    { sensorId: "sensor1", calibrationFunction: (value) => value * 0.9 },
    { sensorId: "sensor2", calibrationFunction: (value) => value * 1.1 },
  ];
  
  const statistics = processSensorReadings(readings, calibrations);
  
  console.log(statistics);