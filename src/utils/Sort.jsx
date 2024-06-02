export const sortByFirstName = (data, order = 'asc') => {
    return data.sort((a, b) => {
      const firstLetterA = a.name.charAt(0).toLowerCase();
      const firstLetterB = b.name.charAt(0).toLowerCase();
      if (firstLetterA < firstLetterB) return order === 'asc' ? -1 : 1;
      if (firstLetterA > firstLetterB) return order === 'asc' ? 1 : -1;
      return 0;
    });
  };
  
  export const sortByTitle = (data, order = 'asc') => {
    return data.sort((a, b) => {
      const firstLetterA = a.title.charAt(0).toLowerCase();
      const firstLetterB = b.title.charAt(0).toLowerCase();
      if (firstLetterA < firstLetterB) return order === 'asc' ? -1 : 1;
      if (firstLetterA > firstLetterB) return order === 'asc' ? 1 : -1;
      return 0;
    });
  };