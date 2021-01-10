import React, { useState } from 'react'
import { Backdrop, Button, Fade, Modal } from '@material-ui/core';
import ModalItem from "../../common/ModalItem";
import { makeStyles } from '@material-ui/core/styles';

// style
const useStyles = makeStyles((theme) => ({
      modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      button: {
        display: "block",
        margin: "0 auto",
        marginBottom: 30,
    }
  }));

const RikkouhoCansel = ({id, guest_id, myId}) => {
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    //modal処理
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
      };
    
    // キャンセル処理
    const onSubmit = () => {
        // ここに書く
        // (1)escortsのrikkouho_idの中の配列から（myid）を削除して更新
        // (2)guestのお知らせに「nicknameさんがidのリクエストへの立候補をキャンセルしました」と追加される。

        setOpen(false);
    };
    
    return (
        <>
            <Button variant="contained" color="secondary" size="large" onClick={handleOpen} className={classes.button}>
                立候補をキャンセルする
            </Button>

            {/* modal */}
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
              timeout: 500,
              }}
            >
            <Fade in={open}>
                <ModalItem
                    title="立候補キャンセル"
                    text="このボランティアへの立候補をキャンセルしますか？"
                    buttonText="キャンセルする"
                    handleClose={handleClose}
                    onSubmit={onSubmit}
                    />
            </Fade>
            </Modal>
        </>
    )
}

export default RikkouhoCansel