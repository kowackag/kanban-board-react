export const validateData = ({name, user, idColumn, deadline}) => {
    const errors = [];
    if (name.length === 0) errors.push('Podaj nazwę nowego zadania');
    if (user.length === 0) errors.push('Określ wykonawcę dla nowego zadania');
    if (idColumn === 0) errors.push('Wybierz fazę realizacji');
    const regDate = /(20[0-9]{2})-(0[1-9]|1[0-2])-(0[0-9]|[12][0-9]|3[01])/;
    if (!regDate.test(deadline) && deadline !== '') {errors.push('Wprowadzono błędny format daty')}
    return errors;
}

