Imports Microsoft.VisualBasic.FileSystem

Public Class FileList

    Private Sub btnSelectFolder_Click(sender As Object, e As EventArgs) Handles btnSelectFolder.Click

        If FolderBrowserDialog1.ShowDialog() <> DialogResult.OK Then
            Return
        End If
        txtFolder.Text = FolderBrowserDialog1.SelectedPath
        lstBoxFiles.Items.Clear()

        For Each f In My.Computer.FileSystem().GetFiles(txtFolder.Text)
            lstBoxFiles.Items.Add(f)

        Next




    End Sub
End Class
