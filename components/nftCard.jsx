export const NFTCard = ({ nft }) => {

    return (
        <div className="w-1/4 flex flex-col ">
        <div className="rounded-md">
            <img className="object-cover h-128 w-full rounded-t-md" src={nft.media[0].gateway} ></img>
        </div>
        <div className="flex flex-col y-gap-2 px-2 py-3 bg-slate-100 rounded-b-md h-110 ">
            <div className="">
                <h2 className="text-xl text-gray-800">{nft.title}</h2>
                <p className="text-gray-600">Id: {nft.id.tokenId.substr(nft.id.tokenId.length -4)}</p>
                <p className="text-gray-600" >{nft.contract.address.substr(0, 4)}...{nft.contract.address.substr(nft.contract.address.length -4)}
                <button onClick={
          () => {
            var copyText = nft.contract.address;

            /* Copy the text inside the text field */
            navigator.clipboard.writeText(nft.contract.address);
          }
        }><img className="object-cover h-7 w-7 rounded-t-md" src="/_next/static/chunks/photocopier.png" alt="Copy machine icons created by Freepik - Flaticon"></img></button></p>
            </div>

            <div className="flex-grow mt-2">
                <p className="text-gray-600">{nft.description.substr(0, 150)}</p>
            </div>
            <div className="flex justify-center mb-1">
                <a href={'https://etherscan.io/token/' + nft.contract.address} target="_blank" className="py-2 px-4 bg-blue-500 w-1/2  text-center rounded-n text-white cursor-pointer">View on Etherscan</a>
            </div>
        </div>

    </div>
    )
}