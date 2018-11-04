import java.util.ArrayList;

public class Cryptogram {
    private ArrayList<Integer> bytes;

    public Cryptogram(String cryptogram) {
        this.bytes = new ArrayList<>();
        for (String b : cryptogram.split(" ")) {
            bytes.add(Integer.parseInt(b,2));
        }
    }

    public int getByte(int i) {
        if(bytes.size()>i)
            return bytes.get(i);
        else {
            return (int) ' ';
        }
    }

    public int getSize() {
        return bytes.size();
    }
}

