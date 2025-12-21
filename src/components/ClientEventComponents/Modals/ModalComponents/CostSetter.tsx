


const CostSetter = () => {
    return (
        <>
            <div className="w-full flex  rounded-[10px] border-4 border-[#0C35BC]">
                <select className="w-fit font-poppins font-semibold text-[14px] p-2 text-center border-r-4 border-[#0C35BC]">
                    <option value="$">$</option>
                    <option value="GH₵">GH₵</option>
                    <option value="€">€</option>
                </select>
                <input
                    className="w-full h-full font-poppins font-semibold text-[14px] p-2 caret-[#0C35BC] outline-none"
                    min={0.1}
                    max={10}
                    step={0.1}
                    type="number"
                    placeholder="0.00"
                />
            </div>
        </>
    )
}

export default CostSetter