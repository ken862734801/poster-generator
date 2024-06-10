const date = new Date();

export type Months =
    | 'January'
    | 'February'
    | 'March'
    | 'April'
    | 'May'
    | 'June'
    | 'July'
    | 'August'
    | 'September'
    | 'October'
    | 'November'
    | 'December';

const monthOptions: Record<Months | string, string> = {
    January: 'Jan',
    February: 'Feb',
    March: 'Mar',
    April: 'Apr',
    May: 'May',
    June: 'Jun',
    July: 'Jul',
    August: 'Aug',
    September: 'Sep',
    October: 'Oct',
    November: 'Nov',
    December: 'Dec',
};

export const getCurrentDate = () => {
    return date.toLocaleDateString('en-US');
};

export const currentDate = getCurrentDate();

export const getCurrentYear = () => {
    return date.getFullYear();
};

export const currentYear = getCurrentYear();

export const formatDuration = (totalSeconds: number) => {
    return new Date(totalSeconds * 1000).toISOString().substring(11, 19);
};

export const formatReleaseDate = (date: string) => {
    const regex = /(\d{1,2}|[A-Za-z]+) (\d{1,2}|[A-Za-z]+),? (\d{4})/;
    const match = regex.exec(date);
    if (match) {
        let day = match[1];
        let month = match[2];
        let year = match[3];

        if (day.length > month.length) {
            month = match[1];
            day = match[2];
        }

        if (monthOptions[month]) {
            month = monthOptions[month];
        }

        return { releaseDate: `${month} ${day}, ${year}`, releaseYear: year };
    } else {
        return { releaseDate: currentDate, releaseYear: currentYear };
    }
};
