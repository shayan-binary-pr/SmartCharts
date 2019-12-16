import React from 'react';
import '../../../sass/components/_categorical-display.scss';
import Scrollbars from 'tt-react-custom-scrollbars';

const CategoricalDisplay = React.memo(({
    onSelectItem,
    updateScrollSpy,
    setScrollPanel,
    ResultsPanel,
    FilterPanel,
    SearchInput,
    isMobile,
    height,
    id,
    searchInputClassName,
    disableAll,
}) => (
    <div
        className="cq-categorical-display"
        style={{ height }}
        id={id}
    >
        <div className="cq-lookup-filters">
            <SearchInput searchInputClassName={searchInputClassName} />
            {isMobile ? '' : <FilterPanel /> }
        </div>
        <Scrollbars
            className="cq-scroll-panel"
            onScroll={updateScrollSpy}
            ref={setScrollPanel}
            style={{ width: isMobile ? '100%' : '312px' }}
        >
            <ResultsPanel
                onSelectItem={onSelectItem}
                id={id}
                disableAll={disableAll}
                isMobile={isMobile}
            />
        </Scrollbars>
    </div>
));

export default CategoricalDisplay;
