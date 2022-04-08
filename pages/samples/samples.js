import 'tachyons';
import data from '../../data';


export default function Samples() {
    return (
        <div className="samples">

            { 
              data && data.map( data => {
                return (
                    <div key={ data.id }>

                      { data.readable ? (

                      <div className="main">

                          <div className="lh-copy tc fl p-4">

                            <a href={ data.preview }>{ data.title }</a>
                          </div>

                       </div>

                      ) : null }

                    </div>
                )
              })
            }
     </div>
    );
}