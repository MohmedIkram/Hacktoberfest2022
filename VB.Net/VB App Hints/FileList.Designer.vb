<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()>
Partial Class FileList
    Inherits System.Windows.Forms.Form

    'Form overrides dispose to clean up the component list.
    <System.Diagnostics.DebuggerNonUserCode()>
    Protected Overrides Sub Dispose(ByVal disposing As Boolean)
        Try
            If disposing AndAlso components IsNot Nothing Then
                components.Dispose()
            End If
        Finally
            MyBase.Dispose(disposing)
        End Try
    End Sub

    'Required by the Windows Form Designer
    Private components As System.ComponentModel.IContainer

    'NOTE: The following procedure is required by the Windows Form Designer
    'It can be modified using the Windows Form Designer.  
    'Do not modify it using the code editor.
    <System.Diagnostics.DebuggerStepThrough()>
    Private Sub InitializeComponent()
        Me.btnSelectFolder = New System.Windows.Forms.Button()
        Me.FolderBrowserDialog1 = New System.Windows.Forms.FolderBrowserDialog()
        Me.Label1 = New System.Windows.Forms.Label()
        Me.txtFolder = New System.Windows.Forms.TextBox()
        Me.lstBoxFiles = New System.Windows.Forms.ListBox()
        Me.SuspendLayout()
        '
        'btnSelectFolder
        '
        Me.btnSelectFolder.Anchor = CType((System.Windows.Forms.AnchorStyles.Top Or System.Windows.Forms.AnchorStyles.Right), System.Windows.Forms.AnchorStyles)
        Me.btnSelectFolder.Location = New System.Drawing.Point(1142, 56)
        Me.btnSelectFolder.Name = "btnSelectFolder"
        Me.btnSelectFolder.Size = New System.Drawing.Size(131, 40)
        Me.btnSelectFolder.TabIndex = 0
        Me.btnSelectFolder.Text = "Select"
        Me.btnSelectFolder.UseVisualStyleBackColor = True
        '
        'Label1
        '
        Me.Label1.AutoSize = True
        Me.Label1.Location = New System.Drawing.Point(12, 25)
        Me.Label1.Name = "Label1"
        Me.Label1.Size = New System.Drawing.Size(253, 30)
        Me.Label1.TabIndex = 1
        Me.Label1.Text = "Select Folder to show files"
        '
        'txtFolder
        '
        Me.txtFolder.Anchor = CType(((System.Windows.Forms.AnchorStyles.Top Or System.Windows.Forms.AnchorStyles.Left) _
            Or System.Windows.Forms.AnchorStyles.Right), System.Windows.Forms.AnchorStyles)
        Me.txtFolder.Location = New System.Drawing.Point(12, 58)
        Me.txtFolder.Name = "txtFolder"
        Me.txtFolder.ReadOnly = True
        Me.txtFolder.Size = New System.Drawing.Size(1124, 35)
        Me.txtFolder.TabIndex = 2
        '
        'lstBoxFiles
        '
        Me.lstBoxFiles.Anchor = CType((((System.Windows.Forms.AnchorStyles.Top Or System.Windows.Forms.AnchorStyles.Bottom) _
            Or System.Windows.Forms.AnchorStyles.Left) _
            Or System.Windows.Forms.AnchorStyles.Right), System.Windows.Forms.AnchorStyles)
        Me.lstBoxFiles.FormattingEnabled = True
        Me.lstBoxFiles.IntegralHeight = False
        Me.lstBoxFiles.ItemHeight = 30
        Me.lstBoxFiles.Location = New System.Drawing.Point(12, 99)
        Me.lstBoxFiles.Name = "lstBoxFiles"
        Me.lstBoxFiles.Size = New System.Drawing.Size(1261, 754)
        Me.lstBoxFiles.TabIndex = 3
        '
        'FileList
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(12.0!, 30.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.ClientSize = New System.Drawing.Size(1285, 865)
        Me.Controls.Add(Me.lstBoxFiles)
        Me.Controls.Add(Me.txtFolder)
        Me.Controls.Add(Me.Label1)
        Me.Controls.Add(Me.btnSelectFolder)
        Me.Name = "FileList"
        Me.Text = "File List"
        Me.ResumeLayout(False)
        Me.PerformLayout()

    End Sub

    Friend WithEvents btnSelectFolder As Button
    Friend WithEvents FolderBrowserDialog1 As FolderBrowserDialog
    Friend WithEvents Label1 As Label
    Friend WithEvents txtFolder As TextBox
    Friend WithEvents lstBoxFiles As ListBox
End Class
