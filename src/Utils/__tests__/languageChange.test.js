import {
    generateLanguageChangeArea
} from '../languageChange';
import ReactDOM from "react-dom";

describe('should create select element with languages', () => {
    it('should return empty string when no arguments are passed', () => {
        const div = document.createElement("div");
        const languageChangeArea = ReactDOM.render(generateLanguageChangeArea(), div);
        expect(languageChangeArea.innerHTML).toMatch(/option/i);
    });
    
})