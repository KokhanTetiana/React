import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import validationSchema from '../../utils/validationSchema';
import FormHeader from './FormHeader';
import RadioPanel from './RadioPanel';
import FormInput from './InputFields';
import SuccessMessage from './SuccessMessage';
import PassengerPanel from './PassengerPanel';
import LuggagePanel from './LuggagePanel';

const FlightForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const [activeTab, setActiveTab] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const [radioValues, setRadioValues] = useState({
    roundTrip: '',
    class: '',
    features: '',
  });

  const [passengerCount, setPassengerCount] = useState({
    adult: 1,
    child: 0,
    infant: 0,
  });

  const [luggageCount, setLuggageCount] = useState({
    carryOn: 0,
    checked: 1,
  });


  const radioOptions = {
    roundTrip: [
      { value: 'round_trip', label: 'В обидва кінці' },
      { value: 'one_way', label: 'В один кінець' },
      { value: 'complex_route', label: 'Складний маршрут' },
      { value: 'nomad', label: 'Nomad' },
    ],
    class: [
      { value: 'economy', label: 'Економ клас' },
      { value: 'premium_economy', label: 'Преміум економ клас' },
      { value: 'business', label: 'Бізнес клас' },
      { value: 'first_class', label: 'Перший клас' },
      { value: 'mixed', label: 'Використовувати змішаний' },
    ],
    features: [
      { value: 'cheapest', label: 'Найдешевші' },
      { value: 'fastest', label: 'Найшвидші' },
      { value: 'best', label: 'Найкращі' },
    ],
  };

  const handleRadioChange = (tab, value) => {
    setRadioValues((prevValues) => ({
      ...prevValues,
      [tab]: value,
    }));
  };

  const handlePassengerCountChange = (type, operation) => {
    setPassengerCount((prevCount) => {
      const newCount = { ...prevCount };
      if (operation === 'increase') {
        newCount[type] += 1;
      } else if (operation === 'decrease') {
        if (type === 'adult' && newCount[type] > 1) {
          newCount[type] -= 1;
        } else if (type !== 'adult' && newCount[type] > 0) {
          newCount[type] -= 1;
        }
      }
      return newCount;
    });
  };

  const handleLuggageCountChange = (type, operation) => {
    setLuggageCount((prevCount) => {
      const newCount = { ...prevCount };
      if (operation === 'increase') {
        newCount[type] += 1;
      } else if (operation === 'decrease') {
        if (newCount[type] > 0) {
          newCount[type] -= 1;
        }
      }
      return newCount;
    });
  };

  

  const onSubmit = (data) => {
    console.log({
      ...data,
      radioValues,
      passengerCount,
      luggageCount,
    });

    setSuccessMessage('Дані успішно надіслано!');
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '20px' }}>
      <FormHeader setActiveTab={setActiveTab} />

      {activeTab && activeTab !== 'passenger' && activeTab !== 'luggage' && (
        <RadioPanel
          options={radioOptions[activeTab]}
          selectedValue={radioValues[activeTab]}
          onChange={(value) => handleRadioChange(activeTab, value)}
        />
      )}

      {activeTab === 'passenger' && (
        <PassengerPanel
          passengerCount={passengerCount}
          handlePassengerCountChange={handlePassengerCountChange}
        />
      )}

      {activeTab === 'luggage' && (
        <LuggagePanel
          luggageCount={luggageCount}
          handleLuggageCountChange={handleLuggageCountChange}
        />
      )}


      <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        <FormInput name="from" label="Звідки: " placeholder="Місто, аеропорт чи місце" register={register} error={errors.from} />
        <FormInput name="to" label="Куди: " placeholder="Місто, аеропорт чи місце" register={register} error={errors.to} />
        <FormInput name="departure" label="Виліт: " type="date" register={register} error={errors.departure} />
        <FormInput name="return" label="Повернення: " type="date" register={register} error={errors.return} />
        <button type="submit">Пошук рейсів</button>
      </form>

      <SuccessMessage message={successMessage} />
    </div>
  );
};

export default FlightForm;
