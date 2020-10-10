import React from 'react';
import iso from 'iso-639-1';

export const generateLanguageChangeArea = (language, setLanguage) =>
            <select className="button" onChange={e => setLanguage(e.target.value)} value={language}>
            {iso.getAllNames().map((codeName, index) => <option key={index} value={iso.getCode(codeName)}>{codeName}</option>)}
            </select>;