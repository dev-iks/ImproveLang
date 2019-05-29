import React, {Component} from 'react';

class ModalMoreChannels extends Component {

    onSubmit(e) {
        e.preventDefault()
        let node = this.refs
        this.props.onSearchChannels(node.search.value)
    }

    render() {
        console.log(this.props.show)
        if(!this.props.show) {
            return null;
        }
        let toggleShow = this.props.show ? 'show' : '';

        return (
            <>
                <div className={'modal fade ' + toggleShow} tabIndex="-1" style={styleBlock} id="moreChannelsModal" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title f-white">More Channels</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.props.onClose}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                            <div className="modal-body col-md-10">
                                <form onSubmit={this.onSubmit.bind(this)}>
                                    <div className="form-group">
                                        <input ref="search" autoFocus={true} className="form-control" type="text" placeholder="Search" aria-label="Search" />
                                    </div>
                                </form>
                                <div className="card">
                                    <div className="card-body">
                                        {
                                            this.props.moreChannels.map(channel => {
                                                return (
                                                    <>
                                                        <h5 className="card-title">{channel.name}</h5>
                                                        <p className="card-text">{channel.purpose}</p>
                                                    </>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-backdrop fade show"></div>
            </>
        )
    }
}

const styleBlock = {
    display: "block",
    paddingRight: "15px"
}


export default ModalMoreChannels;