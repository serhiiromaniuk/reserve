import { MainPageIllustration } from '../../../Assets'
import TitleAndText from './TitleAndText'
import Search from './Search'

const mainPageIllustrationSrtyling = {
    left: '770px',
    top: '75px'
}

export function TopPart() {
    return (
        <div>
            <MainPageIllustration style={mainPageIllustrationSrtyling} />
            <TitleAndText/>
            <Search/>
        </div>
    )
}
