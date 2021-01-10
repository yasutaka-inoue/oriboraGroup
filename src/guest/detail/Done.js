import React, { useState } from 'react'
import { Backdrop, Button, Fade, FormControl, Modal, TextField, Typography } from '@material-ui/core';
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

const Done = ({id, volunteer_id, myId}) => {
    const classes = useStyles();

    const [evaluate, setEvaluate] = useState("");
    const [comment, setComment] = useState("");

    const [open, setOpen] = useState(false);
    //modal処理
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
      };
    
    // 登録処理
    const onSubmit = () => {
        // ここに書く
        // (1)escortsのstatus_2を"完了"に更新
        // (2)volのお知らせに「nicknameさんがあなたの完了報告を確認しました」と追加される。
        // (3)evaluatesに評価が入る
        setOpen(false);
    };
    
    return (
        <>
            <Button variant="contained" color="secondary" size="large" onClick={handleOpen} className={classes.button}>
                完了確認・評価
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
                    title="完了確認・評価"
                    text={
                        <div>
                            <Typography variant="subtitle1" display="block">
                            ■評価（1~5の数を記載）
                            </Typography>
                            <FormControl>
                                <TextField
                                    type="number"
                                    value={evaluate}
                                    onChange={(e) => setEvaluate(e.target.value)}
                                />
                            </FormControl>
                            <Typography variant="subtitle1" display="block">
                            ■コメント
                            </Typography>
                            <FormControl>
                            <TextField
                                value={comment}
                                multiline
                                rows={5}
                                variant="outlined"
                                margin="normal"
                                //  外だしせずにここで書く方法
                                onChange={(e) => setComment(e.target.value)}
                            />
                            </FormControl>

                        </div>
                    }
                    buttonText="送信"
                    handleClose={handleClose}
                    onSubmit={onSubmit}
                    />
                    
            </Fade>
            </Modal>
        </>
    )
}

export default Done
