import * as yup from 'yup';

const validationSchema = yup.object().shape({
    from: yup.string().required("Поле 'Звідки' є обов'язковим"),
    to: yup.string().required("Поле 'Куди' є обов'язковим"),
    departure: yup.string().required("Поле 'Виліт' є обов'язковим"),
    return: yup
        .string()
        .required("Поле 'Повернення' є обов'язковим")
        .test('is-after-departure', 'Дата повернення не може бути раніше за дату вильоту', function (value) {
            const { departure } = this.parent;
            return !departure || new Date(value) >= new Date(departure);
        }),
});

export default validationSchema;
