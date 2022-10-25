import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;

public class awt4Tutorials  extends Frame implements ActionListener {

    TextField textField;

    Button button;

    awt4Tutorials() {

        // Creating components

        textField = new TextField();
        textField.setBackground(Color.black);
        textField.setForeground(Color.white);
        textField.setBounds(60, 50, 170, 20);

        button = new Button("click me");
        button.setBackground(Color.pink);
        button.setForeground(Color.black);
        button.setBounds(100, 120, 80, 30);

        button.addActionListener(this);

        add(button);
        add(textField);
        setSize(300, 300);
        setBackground(Color.gray);
        setForeground(Color.orange);
        setLayout(null);
        setVisible(true);

        addWindowListener(new WindowAdapter() {
            @Override
            public void windowClosing(WindowEvent e) {
                dispose();
            }
        });

    }

    public void actionPerformed(ActionEvent e) {
        textField.setText("Welcome");

    }
}

    class a2{
        public static void main(String[] args) {
            awt4Tutorials a4 = new awt4Tutorials();

        }
    }

