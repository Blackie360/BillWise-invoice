import { Link } from '@react-email/components';
import * as React from 'react';

export function EmailTemplate({invoiceUrl}: {invoiceUrl: string}) {
  return (
    <div>
      <h1>Here is Your Invoice!</h1>
      <Link href={invoiceUrl}>view Invoice</Link>;
    </div>
  );
}