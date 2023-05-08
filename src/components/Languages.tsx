import { useTranslation } from "react-i18next";
import { ChangeEvent } from "react";
function Languages() {
  const { i18n } = useTranslation();

  const handleChange = async (e: ChangeEvent<HTMLSelectElement>) => {
    await i18n.changeLanguage(e.target.value);
  };

  return (
    <select name="language" onChange={handleChange}>
      <option value="en">English</option>
      <option value="tr">Türkçe</option>
    </select>
  );
}

export default Languages;
