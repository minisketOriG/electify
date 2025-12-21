

const TransactionTable = () => {
    return (
        <>
            <div className="w-[98%] mt-5">
                <table className="w-full border-spacing-0 border-separate border-2 border-black rounded-sm overflow-hidden">
                    <thead>
                        <tr>
                            <th className="tableHead">TRANSACTION_ID</th>
                            <th className="tableHead">TYPE</th>
                            <th className="tableHead">AMOUNT</th>
                            <th className="tableHead">DATE</th>
                            <th className="tableHead">TIME</th>
                            <th className="tableHead">STATUS</th>
                        </tr>
                    </thead>

                    <tbody>
                        {Array.from({ length: 8 }).map((_, index) => (
                            <tr key={index}>
                                <td className="tableData">tansact_213131313</td>
                                <td className="tableData">{index % 2 == 0 ? "Deposit" : "Withdrawal"}</td>
                                <td className="tableData">$ {index + 2.5}</td>
                                <td className="tableData">12th Dec, 2022</td>
                                <td className="tableData">11:45pm</td>
                                <td className="tableData">
                                    {index % 2 === 0 ? (
                                        <TransactionStatus type="pending" />
                                    ) : index % 3 === 0 ? (
                                        <TransactionStatus type="failed" />
                                    ) : (
                                        <TransactionStatus type="success" />
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

interface TransactionStatusProps {
    type: string;
}

const TransactionStatus = (props: TransactionStatusProps) => {
    return (
        <>
            {
                props.type == "success" ? (
                    <div className="flex justify-center items-center rounded-full p-1 mx-2 bg-green-400">
                        <span className="font-poppins text-[12px] text-green-900">Success</span>
                    </div>
                ) :
                    props.type == "pending" ? (
                        <div className="flex justify-center items-center rounded-full p-1 mx-2 bg-[#0C35BC]/40">
                            <span className="font-poppins text-[12px] text-[#0C35BC]">Pending</span>
                        </div>
                    ) : (
                        <div className="flex justify-center items-center rounded-full p-1 mx-2 bg-red-400">
                            <span className="font-poppins text-[12px] text-red-900">Failed</span>
                        </div>
                    )
            }
        </>
    )
}

export default TransactionTable