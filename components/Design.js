import Image from 'next/image'
export default function Home() {
    return (
        <div style={{position:"absolute",top:0,left:0,opacity:.5}}>
            <Image src="/images/design-mobile.svg" width="375" height="2215"/>
        </div>
    )
}