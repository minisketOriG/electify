

const DepositPage = () => {
  return (
    <>
      <div className="bg-gray-200 flex flex-col items-center justify-center min-h-screen">
        <div className="w-full max-w-lg p-10 bg-white rounded-xl shadow-lg">
          <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-8">Deposit Funds</h1>
          <form className="space-y-6">
            <div>
              <label htmlFor="accountNumber" className="block text-sm font-semibold text-gray-700">
                Account Number
              </label>
              <input
                type="text"
                id="accountNumber"
                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
                placeholder="Enter your account number"
              />
            </div>
            <div>
              <label htmlFor="amount" className="block text-sm font-semibold text-gray-700">
                Deposit Amount
              </label>
              <input
                type="number"
                id="amount"
                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
                placeholder="Enter amount to deposit"
              />
            </div>
            <button
              type="submit"
              className="w-full px-5 py-3 text-lg font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 "
            >
              Deposit Now
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default DepositPage