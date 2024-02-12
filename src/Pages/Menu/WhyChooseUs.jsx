import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import GambarSatu from '../../assets/images/hero-1.png';
import Floating from '../../Components/Floating';
// import animasi
const WhyChooseUs = () => {
    return (
        <>
        <Navbar />
        <Floating />
        {/* Summary */}
        <div className="w-full h-[450px] bg-blue-500 text-white py-24">
                <div className="container mx-auto text-center p-8">
                    <div className="flex justify-center items-center grid grid-cols-1">
                    <h2 className="text-[1.3rem] md:text-[2rem] 2xl:text-4xl font-semibold mb-4">Empowering Your Financial Journey!</h2>
                    <p className="text-[0.9rem] md:text-[1.2rem] 2xl:text-lg  text-justify leading-relaxed lg:p-8 2xl:p-8 py-4">
                        Welcome to our Digital Lending Solutions! We revolutionize the borrowing experience, making it faster, smarter, and tailored just for you. Explore our cutting-edge solutions that simplify loan processing and elevate risk assessment, ensuring a seamless and secure journey.
                    </p>
                    </div>
                </div>
                
            </div>

        {/* Section 1 */}
        <div className="w-100 h-[100%]">
            <div className="container mx-auto 2xl:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2">
                {/* heading */}
                <div className="p-8 space-y-8 lg:py-16 text-black order-2 md:order-1">
                <h1 className="font-bold text-[1.7rem] lg:text-[2.8rem]">Lorem ipsum dolor sit amet consectetur.</h1>
                <p className="text-justify text-[1rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum reprehenderit sit possimus. Dolore consequatur rerum adipisci magni quis ipsum in tempore neque nostrum a, aperiam itaque fugiat veniam nesciunt! Cupiditate quia ut earum dolorem iusto eligendi blanditiis, nulla ipsa et hic laborum ullam voluptatem autem tempore facilis iste id explicabo deleniti ipsam? </p>
                {/* <button className="bg-black text-white p-2 rounded-lg hover:bg-red-700 transform hover:scale-105 transition-transform duration-300">Request a Demo-></button> */}
                </div>
                {/* images */}
                <div className="w-[350px] h-[300px] lg:w-[500px] lg:h-[450px] flex justify-center items-center lg:ml-auto md:mt-16 rounded-lg order-1 lg:order-2">
                    <img src={GambarSatu} alt="" className='w-[300px] lg:w-[470px]'/>
                </div>
                </div>
            </div>
        </div>

        {/* section 2 */}
        <div className="w-100 text-white h-[100%] bg-blue-500">
        <div className="container mx-auto 2xl:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2">
                {/* images */}
                <div className="w-[350px] h-[300px] lg:w-[500px] lg:h-[450px] flex justify-center items-center md:mt-16 rounded-lg order-1 lg:order-2">
                    <img src={GambarSatu} alt="" className='w-[300px] lg:w-[470px]'/>
                </div>
                {/* heading */}
                <div className="p-8 space-y-8 lg:py-16  text-white order-2 md:order-2">
                <h1 className="font-bold text-[1.7rem] lg:text-[2.8rem]">Lorem ipsum dolor sit amet consectetur.</h1>
                <p className="text-justify text-[1rem]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe consequatur voluptates sunt eius maiores hic quisquam sit sequi animi itaque dolor quis harum consectetur illo aperiam corporis labore, voluptatum eligendi explicabo? Eveniet vero neque perferendis! Recusandae maxime exercitationem perferendis voluptate eum laboriosam expedita magnam architecto obcaecati quibusdam temporibus nisi dolores libero explicabo sequi impedit, asperiores non sapiente omnis fugit vel possimus neque? Expedita deserunt exercitationem fuga! Perspiciatis, dolor doloribus ad maiores soluta animi eligendi. Dolor eos assumenda aperiam reiciendis praesentium facere, eligendi cum est aliquam quo quibusdam adipisci enim distinctio maxime quia voluptate molestias velit corporis ullam perferendis fuga! Ea. </p>
                </div>
                </div>
            <div className="flex justify-center items-center">
            <button className="hover:underline mb-8">
                Lorem, ipsum dolor->
            </button>
            </div>
        </div>
        </div>


        {/* Section 3 */}
        <div className="w-full h-[400px] md:h-[600px]">
            <div className="container mx-auto 2xl:p-8">
                <div className="grid grid-cols-1">
                {/* heading */}
                <div className="flex justify-center items-center p-8 md:p-16">
                    <h1 className="font-semibold font-Roboto text-[1.3rem] md:text-[1.7rem]">
                        Lorem ipsum dolor sit amet consectetur.
                    </h1>
                </div>
                    {/* images */}
                    <div className="flex justify-center items-center">
                    <div className="bg-gray-200 w-[330px] h-[200px] md:w-[1200px] md:h-[300px] flex justify-center items-center rounded-lg">
                        gambar
                        <img src="" alt="" className='w-auto flex justify-center items-center' />
                        </div>
                    </div>
                </div>
            </div>
        </div>


        {/* Section 4 */}
        <div className="w-full h-auto md:h-[600px] bg-blue-500">
            <div className="container mx-auto p-2 2xl:p-8">
                <div className="flex justify-center items-center">
                    <h1 className="font-bold text-[1.5rem] text-white md:text-[2rem]">Lorem ipsum dolor sit.</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8">
                    {/* card */}
                    <div className="card shadow-md hover:shadow-lg transition duration-700 transform hover:-translate">
                        <div className="bg-white rounded-lg shadow-md flex justify-center items-center">
                            <div className="text-center w-full h-auto p-2 text-[1.3rem] font-bold text-red-600">
                                Lorem, ipsum dolor.
                                <hr className="border-2 border-red-500 mt-2"/>
                                <p className="text-black text-[0.8rem] p-2 font-light text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. In blanditiis beatae iusto esse repellat obcaecati sint explicabo, voluptas pariatur ad commodi voluptates mollitia laudantium ullam molestias nulla doloremque delectus aspernatur?</p>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow-md hover:shadow-lg transition duration-700 transform hover:-translate">
                        <div className="bg-white rounded-lg shadow-md flex justify-center items-center">
                            <div className="text-center w-full h-auto p-2 text-[1.3rem] font-bold text-red-600">
                                Lorem, ipsum dolor.
                                <hr className="border-2 border-red-500 mt-2"/>
                                <p className="text-black text-[0.8rem] p-2 font-light text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. In blanditiis beatae iusto esse repellat obcaecati sint explicabo, voluptas pariatur ad commodi voluptates mollitia laudantium ullam molestias nulla doloremque delectus aspernatur?</p>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow-md hover:shadow-lg transition duration-700 transform hover:-translate">
                        <div className="bg-white rounded-lg shadow-md flex justify-center items-center">
                            <div className="text-center w-full h-auto p-2 text-[1.3rem] font-bold text-red-600">
                                Lorem, ipsum dolor.
                                <hr className="border-2 border-red-500 mt-2"/>
                                <p className="text-black text-[0.8rem] p-2 font-light text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. In blanditiis beatae iusto esse repellat obcaecati sint explicabo, voluptas pariatur ad commodi voluptates mollitia laudantium ullam molestias nulla doloremque delectus aspernatur?</p>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow-md hover:shadow-lg transition duration-700 transform hover:-translate">
                        <div className="bg-white rounded-lg shadow-md flex justify-center items-center">
                            <div className="text-center w-full h-auto p-2 text-[1.3rem] font-bold text-red-600">
                                Lorem, ipsum dolor.
                                <hr className="border-2 border-red-500 mt-2"/>
                                <p className="text-black text-[0.8rem] p-2 font-light text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. In blanditiis beatae iusto esse repellat obcaecati sint explicabo, voluptas pariatur ad commodi voluptates mollitia laudantium ullam molestias nulla doloremque delectus aspernatur?</p>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow-md hover:shadow-lg transition duration-700 transform hover:-translate">
                        <div className="bg-white rounded-lg shadow-md flex justify-center items-center">
                            <div className="text-center w-full h-auto p-2 text-[1.3rem] font-bold text-red-600">
                                Lorem, ipsum dolor.
                                <hr className="border-2 border-red-500 mt-2"/>
                                <p className="text-black text-[0.8rem] p-2 font-light text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. In blanditiis beatae iusto esse repellat obcaecati sint explicabo, voluptas pariatur ad commodi voluptates mollitia laudantium ullam molestias nulla doloremque delectus aspernatur?</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <button className="hover:underline text-white mb-2">
                        Lorem, ipsum dolor.
                    </button>
                </div>
            </div>
        </div>


        {/* Section 5 */}
      <div className="w-full h-auto flex-wrap">
        {/* Image full*/}
        <div className="container mx-auto p-8 md:py-16">
            <div className="w-[100%] h-[300px] md:h-[550px] rounded-xl bg-gray-200 flex justify-center items-center">
                <img src="" alt="gambar" className='w-auto flex justify-center items-center' />
            </div>
        </div>
        {/* Image grid 2*/}
        <div className="container mx-auto p-4 md:p-8 md:py-16">
            <div className="grid grid-cols-2 gap-2 md:gap-8">
            <div className="w-[100%] h-[200px] md:w-[100%] md:h-[550px] rounded-xl bg-gray-200 flex justify-center items-center">
                <img src="" alt="gambar" className='w-auto flex justify-center items-center' />
            </div>
            <div className="w-[100%] h-[200px] md:w-[100%] md:h-[550px] rounded-xl bg-gray-200 flex justify-center items-center">
                <img src="" alt="gambar" className='w-auto flex justify-center items-center' />
            </div>
            </div>
        </div>
        {/* Image grid 3*/}
        <div className="container mx-auto p-4 md:p-8 md:py-16">
            <div className="grid grid-cols-3 gap-1 md:gap-8 ">
            <div className="w-[100%] h-[150px] md:w-[100%] md:h-[400px] rounded-xl bg-gray-200 flex justify-center items-center">
                <img src="" alt="gambar" className='w-auto flex justify-center items-center' />
            </div>
            <div className="w-[100%] h-[150px] md:w-[100%] md:h-[400px] rounded-xl bg-gray-200 flex justify-center items-center">
                <img src="" alt="gambar" className='w-auto flex justify-center items-center' />
            </div>
            <div className="w-[100%] h-[150px] md:w-[100%] md:h-[400px] rounded-xl bg-gray-200 flex justify-center items-center">
                <img src="" alt="gambar" className='w-auto flex justify-center items-center' />
            </div>
            </div>
        </div>
        {/* Image grid 4*/}
        <div className="container mx-auto p-4 md:p-8 md:py-16">
            <div className="grid grid-cols-2 gap-2">
            <div className="w-[100%] h-[200px] md:w-[100%] md:h-[400px] rounded-xl bg-gray-200 flex justify-center items-center">
                <img src="" alt="gambar" />
            </div>
            <div className="w-[100%] h-[200px] md:w-[100%] md:h-[400px] rounded-xl bg-gray-200 flex justify-center items-center">
                <img src="" alt="gambar" />
            </div>
            <div className="w-[100%] h-[200px] md:w-[100%] md:h-[400px] rounded-xl bg-gray-200 flex justify-center items-center">
                <img src="" alt="gambar" />
            </div>
            <div className="w-[100%] h-[200px] md:w-[100%] md:h-[400px] rounded-xl bg-gray-200 flex justify-center items-center">
                <img src="" alt="gambar" />
            </div>
            </div>
        </div>
      </div>

        {/* Section 6 */}
        <div className="w-full h-[600px] ">
        <div className="container mx-auto p-2 md 2xl:p-8">
          <Tabs>
            <TabList className="flex space-x-2">
              <Tab className="cursor-pointer border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white py-2 px-4 rounded">
                Tab 1
              </Tab>
              <Tab className="cursor-pointer border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white py-2 px-4 rounded">
                Tab 2
              </Tab>
              <Tab className="cursor-pointer border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white py-2 px-4 rounded">
                Tab 3
              </Tab>
              <Tab className="cursor-pointer border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white py-2 px-4 rounded">
                Tab 4
              </Tab>
              <Tab className="cursor-pointer border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white py-2 px-4 rounded">
                Tab 5
              </Tab>
            </TabList>

            {/* Tab Panels */}
            <TabPanel>
              <div className="p-8">
                <h2 className="text-[1.2rem] font-Roboto">Tab 1 Content</h2>
                <p className='text-justify text-[1rem] py-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam sequi harum, illum sit molestiae facere soluta in, nihil blanditiis eius aspernatur rem? Natus dolor asperiores culpa illo illum enim facilis non quam consectetur ut totam quo impedit, aperiam tempora alias nesciunt amet vel! Quae voluptates esse ratione suscipit veniam earum!</p>
                {/* Isi dengan konten dan gambar untuk Tab 1 */}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="p-8">
                <h2 className="text-[1.2rem] font-Roboto">Tab 2 Content</h2>
                <p className='text-justify text-[1rem] py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores veniam sapiente sint saepe minus recusandae at, similique quos commodi quas, cumque blanditiis maiores iure, obcaecati pariatur corporis totam exercitationem perspiciatis aliquam eius voluptas soluta deleniti assumenda. Distinctio nobis corrupti architecto officia omnis dicta, alias amet. Deserunt omnis voluptatem eum iste facilis in sequi maiores explicabo voluptates cum doloremque magni soluta unde porro, id vero sed sunt! Ullam, facere dolorum asperiores aperiam sint minima. Natus quia maxime expedita aliquid. Accusantium praesentium corporis quia nobis quaerat dignissimos ab expedita eos impedit consectetur sapiente, dicta porro, nulla rerum quod quo numquam, cum tempore!</p>
                {/* Isi dengan konten dan gambar untuk Tab 2 */}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="p-8">
                <h2 className="text-[1.2rem] font-Roboto">Tab 3 Content</h2>
                <p className='text-justify text-[1rem] py-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam dolor possimus, ab qui fugiat quis debitis voluptas quos expedita porro sed, esse accusantium! Doloremque rerum consequuntur suscipit perspiciatis qui nam ex reprehenderit atque autem inventore eum magnam unde, vel modi aliquam nesciunt nihil quaerat maxime amet odit distinctio beatae molestias nulla fugit. Ad accusamus quae perferendis nulla delectus animi quam impedit atque sunt architecto modi natus distinctio beatae, veniam saepe earum itaque officia autem magnam asperiores dolore quod dolores dolor laborum? Rerum eveniet est, hic velit fugiat nostrum officia tenetur. Laboriosam maiores voluptatem optio vero atque aspernatur, pariatur totam molestias, repellat modi quia dolor explicabo libero facilis temporibus eaque nam minus aliquam tempora. Architecto corporis esse harum, tenetur voluptates voluptatibus assumenda quibusdam accusamus, doloribus, vero laudantium perspiciatis temporibus facilis porro minus unde! Culpa hic sapiente cumque laudantium doloribus temporibus corrupti incidunt rem, dignissimos a voluptas qui, eligendi error asperiores harum eius ipsam laborum laboriosam necessitatibus recusandae sit dolores at unde! Rem eius quibusdam delectus sint quae sit architecto libero ea eveniet ducimus aut cum, obcaecati vero ratione odit dolorum, possimus ex atque cupiditate, maiores reiciendis dolor voluptate. Eveniet veniam ducimus a animi dolorum suscipit quisquam recusandae praesentium? Excepturi, dolores ut.</p>
                {/* Isi dengan konten dan gambar untuk Tab 3 */}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="p-8">
                <h2 className="text-[1.2rem] font-Roboto">Tab 4 Content</h2>
                <p className='text-justify text-[1rem] py-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non iure suscipit sint optio asperiores quaerat ipsam, esse delectus sit. Dolorum illum ab corrupti cum facilis dolorem blanditiis veniam! Reiciendis, numquam. Iure corrupti eveniet recusandae eum aspernatur nulla necessitatibus numquam iusto sapiente. Itaque deleniti animi, autem omnis quaerat culpa, nihil maxime saepe architecto perspiciatis fugiat eaque voluptas sequi modi eum tempora! Maxime nobis inventore aperiam similique harum eaque totam deleniti accusantium soluta sapiente, corporis rem minima ex nemo modi nihil numquam. Nemo, et aperiam eveniet quaerat eum quos eligendi id magni repellat? Blanditiis culpa necessitatibus nemo perferendis nostrum vero reiciendis perspiciatis cupiditate. Incidunt voluptatum, quod quam quibusdam nam qui inventore possimus a eum laboriosam ea aperiam quaerat perspiciatis at voluptatibus earum iste ipsa corrupti ducimus voluptate id minus voluptas? Repellat porro molestias dolorem magnam? Doloremque laboriosam in sequi corrupti fuga dicta, necessitatibus nam pariatur quasi animi aliquid nihil molestias fugiat quos.</p>
                {/* Isi dengan konten dan gambar untuk Tab 4 */}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="p-8">
                <h2 className="text-[1.2rem] font-Roboto">Tab 5 Content</h2>
                <p className='text-justify text-[1rem] py-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit accusantium necessitatibus eius corrupti magni nesciunt nulla amet aperiam possimus recusandae deleniti itaque iste voluptatem consectetur distinctio vero ipsum assumenda, dolore modi ducimus commodi cumque ipsa. Porro aliquam voluptas maxime voluptatibus sequi omnis dolores iste rerum architecto sed labore hic similique ipsa, quas nesciunt totam quidem facere vero eius aut nihil? Natus facilis, itaque dignissimos blanditiis aliquam cupiditate? Qui temporibus at quidem, adipisci facere eum dolore hic impedit cumque nesciunt deserunt ea amet suscipit, voluptatum sunt tempora architecto consectetur ipsam repudiandae aliquid minima, eaque nobis. Explicabo, quisquam eveniet illum exercitationem facilis velit dolorum odit deserunt magnam quis a est? Ipsam consectetur minima molestiae maxime saepe, voluptates debitis nam nulla quasi possimus, architecto atque incidunt error deleniti nobis itaque. In, est repellat! Laboriosam quisquam et labore aspernatur tempora! Omnis cum delectus, fuga sunt aut nemo, quas voluptates aliquam molestias earum eius praesentium, veniam error commodi numquam dolorum eligendi non illum laboriosam. Saepe odit doloribus esse nemo nulla modi eius voluptatibus, quidem consequuntur consectetur facere. Soluta deleniti sunt veritatis optio eos, quis tenetur? Placeat rerum maxime ex nisi sed accusamus deleniti quia, sit quae nulla quibusdam dolorum cum atque eligendi. Corrupti doloremque facilis, exercitationem architecto reprehenderit repudiandae molestias obcaecati odio voluptate eius? Modi, error optio animi iste doloremque veritatis! Excepturi quae repellendus, veritatis amet, doloribus deleniti quia accusantium dolorum perspiciatis architecto cum? Eaque consequuntur ratione veniam dignissimos magnam minus vel quidem pariatur ipsa commodi excepturi hic quam cumque, vitae, qui numquam mollitia exercitationem repellat, inventore provident! Eius non corporis iure illum repudiandae ducimus sed! Voluptatem distinctio itaque saepe dolorem, unde accusantium alias inventore repellendus cumque sed non beatae iusto natus quae quos nihil? Alias neque laboriosam molestiae in dolores eum corporis corrupti, quae impedit voluptatum dolore excepturi iste facere dicta cupiditate deleniti. Reiciendis tempore vero placeat porro, hic fugit. Beatae voluptatibus odit id nisi natus repudiandae consequatur blanditiis vel quo, dolor culpa dolorem iure officiis asperiores repellat fugiat est totam corporis facilis, modi eveniet laboriosam aspernatur. Quidem quam, voluptatem, nobis cumque enim corporis nesciunt, dicta suscipit velit laudantium expedita ad itaque reprehenderit nisi. Molestias, esse cupiditate? Distinctio delectus ullam id accusamus cum voluptas. Perferendis, necessitatibus minima vero quasi impedit dignissimos inventore, molestias quia eaque nemo aliquam ratione a itaque eos aliquid laudantium? Labore nemo accusamus deleniti sunt qui a. Quae voluptatum ullam consectetur officia beatae, eaque provident error dolorem quam illum voluptatem minima.</p>
                {/* Isi dengan konten dan gambar untuk Tab 5 */}
              </div>
            </TabPanel>
          </Tabs>
        </div>
        </div>
        <Footer />
        </>
    )
}
export default WhyChooseUs;