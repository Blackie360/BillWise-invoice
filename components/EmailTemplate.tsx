import * as React from 'react';



export function EmailTemplate({invoiceUrl}) {
    return (
        <div>
            <h1>Here is Your Invoice, <a href={invoiceUrl}></a>!</h1>
        </div>
    );
}