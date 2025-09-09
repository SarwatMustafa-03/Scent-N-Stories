import { MdPolicy } from "react-icons/md";
import { FaAward } from "react-icons/fa6";
import { FaThumbsUp } from "react-icons/fa6";

const Policy = () => {
  return (
    <div className="flex gap-5 ">
      <div> <MdPolicy  className="size-15"/>
        <h2 className="font-bold " >Awarded by Consumer  <br />Association of Pakistan</h2>
        <p className="font-light">Consumer Association of Pakistan recognized <br /> Scents N Stories in the 17th Consumer Choice <br /> Awards</p>
      </div>

      <div><FaAward className="size-15" />
        <h2 className="font-bold">15 Days Easy Returns Policy</h2>
        <p className="font-light">Didn't Love What You Ordered?
          Avail returns or exchange for your online <br /> purchases within 15 days.
          For in-store exchanges only.</p>
      </div>

      <div><FaThumbsUp className="size-15"/>
        <h2 className="font-bold">Super Macerated Perfumes</h2>
        <p className="font-light">Macerated for intensity, perfection, and deeper, longer-lasting performance.</p>

      </div>
    </div>
  )
}

export default Policy
