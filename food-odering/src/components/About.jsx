import aboutImage from '../Assets/about-image.png'

export const About = () => {
    return (
        <div className="bg-white">
            <div className=" p-24 grid md:grid-cols-2">
                <div className="">
                    <h2 className="text-2xl font-medium">
                        About Us

                    </h2>
                    <p className="text-lg">
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Pellentesque bibendum massa
                        at tincidunt tincidunt. Nulla blandit felis magna,
                        sit amet sagittis massa iaculis eget. Duis at bibendum
                        nibh. Nullam porttitor elit in ex aliquet, eget lacinia
                        lectus imperdiet. Pellentesque et tellus rhoncus, accumsan
                        elit vitae, pulvinar magna. In hac habitasse platea dictumst.
                        Nulla placerat felis mauris, tincidunt porttitor nulla euismod
                        ut. Sed vehicula metus felis, eget elementum elit sodales in.
                        Duis pellentesque molestie vehicula. Vestibulum iaculis nisl
                        vel laoreet interdum. Aenean rhoncus nunc id dui sollicitudin ullamcorper.
                        Aliquam rhoncus quam quis nulla tempor, at porta risus gravida.
                        Aliquam mattis nec felis at sollicitudin. Fusce ligula magna,
                        imperdiet id sapien interdum, bibendum mollis ligula.
                    </p>

                </div>
                <div className="flex items-center justify-center">
                    <img src={aboutImage} alt="" className='w-[480px] h-[480px] object-cover'/>

                </div>

            </div>
        </div>
    )
}