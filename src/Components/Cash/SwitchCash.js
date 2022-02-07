const ChoiceCash = (cash, cachValue) => {

  switch (cachValue.Cur_Abbreviation) {
    case "AUD":
      return cash + " " + "BYN";
    case "RUB":
      return Math.round((cash * 100 / cachValue.Cur_OfficialRate) * 100) / 100 + " " + cachValue.Cur_Abbreviation;
    default:
      return Math.round((cash / cachValue.Cur_OfficialRate) * 100) / 100 + " " + cachValue.Cur_Abbreviation;
  }
}
export default ChoiceCash;