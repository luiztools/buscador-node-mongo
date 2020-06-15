//simplify.js
module.exports = (text) => {
    const separators = /[\s,\.;:\(\)\-'\+]/g;
    const diacritics = /[\u0300-\u036f]/g;
    //capitalização e normalização
    text = text.toUpperCase().normalize("NFD").replace(diacritics, "");
    //separando e removendo repetidos
    const arr = text.split(separators).filter((item, pos, self) => self.indexOf(item) == pos);
    console.log(arr);
    //removendo nulls, undefineds e strings vazias
    return arr.filter(item => (item));
}