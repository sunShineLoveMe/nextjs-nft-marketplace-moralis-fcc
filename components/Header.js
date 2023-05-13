import { ConnectButton } from "@web3uikit/web3"
import Link from "next/link"

export default function Header() {
    return (
        <nav className="p-5 border-b-2 flex flex-row justify-between items-center">
            <h1 className="py-4 px-4 font-bold text-3xl">NFT Marketplace</h1>
            <div className="flex flex-row items-center">
                <Link href="/">
                    <a className="mr-4 p-6">Home</a>
                </Link>
                <Link href="/sell-nft">
                    <a className="mr-4 p-6">Sell NFT</a>
                </Link>
                {/* moralisAuth 属性用于控制连接按钮是否使用 Moralis 登录来管理用户的身份验证状态，或者使用 Web3.js 
                连接来连接以太坊网络。根据具体情况选择合适的选项，可以使 DApp 的用户界面更加友好和易于使用 */}
                <ConnectButton moralisAuth={false} />
            </div>
        </nav>
    )
}