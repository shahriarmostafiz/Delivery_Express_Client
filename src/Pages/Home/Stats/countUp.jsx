import CountUp from 'react-countup';

const Numbers = ({ number, }) => {
    return (
        <>
            <CountUp start={0} end={number} delay={.5}>
                {({ countUpRef }) => (
                    <div>
                        <span ref={countUpRef} />
                    </div>
                )}
            </CountUp>
        </>
    );
};

export default Numbers;