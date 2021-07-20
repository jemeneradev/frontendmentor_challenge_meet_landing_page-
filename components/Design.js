import Image from 'next/image'
export default function Home() {
    return (
        <div style={{position:"absolute",top:0,left:"26px",opacity:.5}}>

            {/* <Image src="/images/design-mobile.svg" width="375" height="2215" /> */}
             <Image src="/images/design-tablet.svg" width="768" height="2128"/>
            
            {/* <Image src="/images/design-desktop.svg" width="1440" height="1895"/> */}
        </div>
    )
}