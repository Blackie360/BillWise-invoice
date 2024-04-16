import React from 'react';

const FAQ = () => {
  return (
    <section className="bg-gray-900 ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-white dark:text-white">Frequently asked questions</h2>
          <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
              <div>
                  <div className="mb-10">
                      <h3 className="flex items-center mb-4 text-lg font-medium text-white dark:text-white">
                          <svg className="flex-shrink-0 mr-2 w-5 h-5 ttext-white dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                          How do I create a new invoice?
                      </h3>
                      <p className="ttext-white dark:text-gray-400">You can easily create a new invoice by navigating to the "Create Invoice" section of the app and filling in the necessary details such as client information, item details, and payment terms.</p>
                  </div>
                  <div className="mb-10">                        
                      <h3 className="flex items-center mb-4 text-lg font-medium text-white dark:text-white">
                          <svg className="flex-shrink-0 mr-2 w-5 h-5 ttext-white dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                          How can I customize the look of my invoices?
                      </h3>
                      <p className="ttext-white dark:text-gray-400">You can customize the look of your invoices by selecting a template from the app's template gallery and then modifying it to suit your brand's colors and style.</p>
                  </div>
                  <div className="mb-10">
                      <h3 className="flex items-center mb-4 text-lg font-medium text-white dark:text-white">
                          <svg className="flex-shrink-0 mr-2 w-5 h-5 ttext-white dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                          How can I track the status of my invoices?
                      </h3>
                      <p className="ttext-white dark:text-gray-400">You can track the status of your invoices by accessing the "Invoice History" section of the app, which provides a list of all your invoices along with their current status (e.g., paid, pending, overdue).</p>
                  </div>
              </div>
              <div>
                  <div className="mb-10">
                      <h3 className="flex items-center mb-4 text-lg font-medium text-white dark:text-white">
                          <svg className="flex-shrink-0 mr-2 w-5 h-5 ttext-white dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                          How can I send invoices to my clients?
                      </h3>
                      <p className="ttext-white dark:text-gray-400">You can easily send invoices to your clients directly from the app by selecting the invoice you want to send and choosing the "Send" option, which will send the invoice via email.</p>
                  </div>
                  <div className="mb-10">
                      <h3 className="flex items-center mb-4 text-lg font-medium text-white dark:text-white">
                          <svg className="flex-shrink-0 mr-2 w-5 h-5 ttext-white dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                          How can I accept payments through the app?
                      </h3>
                      <p className="ttext-white dark:text-gray-400">You can accept payments through the app by integrating with payment gateways such as PayPal, Stripe, or Square. Once integrated, your clients can pay their invoices directly through the app.</p>
                  </div>
              </div>
          </div>
      </div>
    </section>
  );
}

export default FAQ;
