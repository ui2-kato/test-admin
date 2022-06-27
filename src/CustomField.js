// in src/CustomField.js
import * as React from "react";
import { useRecordContext } from 'react-admin';

const CustomField = ({ source }) => {
    const record = useRecordContext();
    return record ? (
        <a href={record[source]}>
            {record[source]}
        </a>
    ) : null;
}

export default CustomField;