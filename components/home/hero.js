import Animation from '../../components/home/animation'

export default function Hero() {
    return (
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                    학원에 관한 모든 정보!
                </h1>
                <p className="mb-8 leading-relaxed">
                    1. 좋은 학원을 찾고 싶나요?
                    <br />2. 학원의 수업 시간표가 궁금한가요?
                    <br />3. 우리 아이가 출석은 잘 하고 있는지 궁금한가요?
                </p>
                <div className="flex justify-center">
                    <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">프로젝트 보러가기</button>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Animation />
            </div>
        </>
    )
}